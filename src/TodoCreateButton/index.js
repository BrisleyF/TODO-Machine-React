import React from "react";
import './TodoCreateButton.css';

function TodoCreateBotton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
        className="CreateTodoButton" 
        onClick={onClickButton}
        type="submit"
        >
        +
        </button>
    );
}

export {TodoCreateBotton};