import React from "react";


const Todo = ({ task, id, handleRemove }) => {
    const remove = () => handleRemove(id);

    return (
        <div>
            <li>{task}</li>
            <button onClick={remove}>X</button>
        </div>
    );
}

export default Todo;