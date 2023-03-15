import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la cebolla para el almuerzo"
            required
            />
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                type='button'
                >
                    Cancelar
                </button>
                <button 
                className="TodoForm-button TodoForm-button--add"
                type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};