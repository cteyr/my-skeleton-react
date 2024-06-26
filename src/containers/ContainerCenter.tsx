import React, { useState } from 'react';
//@ts-ignore
import imgLogoSol from '../assets/images/icon-sun.svg';
//@ts-ignore
import cruz from '../assets/images/icon-cross.svg';
import { InputTodo } from '../components/input';

const ContainerCenter = () => {

    const [valueInput, setValueInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [checkedTodos, setCheckedTodos] = useState(new Set());

    const handleChange = (event) => {
        setValueInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
        if (valueInput.trim()) {
            setTodos([...todos, valueInput]); // Agrega el nuevo todo a la lista de todos
            setValueInput(''); // Limpia el input después de enviar
        }
    }

    const toggleCheck = (index) => {
        const newCheckedTodos = new Set(checkedTodos);
        if (newCheckedTodos.has(index)) {
            newCheckedTodos.delete(index);
        } else {
            newCheckedTodos.add(index);
        }
        setCheckedTodos(newCheckedTodos);
    }

    

    return (
        <div className="container-center">
            <div className="component-todo">
                <h1 className="todo">TODO</h1>
                <img className="imgLogoSol" src={imgLogoSol} alt="Logo Sol" />
            </div>
            <form onSubmit={handleSubmit}>
                <InputTodo 
                    type='text' 
                    id='input' 
                    value={valueInput} 
                    onChange={handleChange} 
                    placeholder='Create a new Todo' 
                />
            </form>
            <div className="lista-todos">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <div id='div-input-value' className={`div-input-value ${checkedTodos.has(index) ? 'underline' : ''}`}>
                            <div 
                                id='circle' 
                                className={`circle ${checkedTodos.has(index) ? 'checked' : ''}`} 
                                onClick={() => toggleCheck(index)}
                            > 
                                <span className="checkmark">✔</span>
                            </div>
                            
                            <img src={cruz} className='cruz' alt="Eliminar Todo" />
                            {todo}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { ContainerCenter };