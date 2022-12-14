import React, { useState } from "react";
import {v4 as uuid} from "uuid"

function NewTodoForm({ addTodo }) {
    const [formData, setFormData] = useState('')

    const handleChange = e => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo({ ...formData, id: uuid() });
        setFormData({task : ''});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input
                id="task"
                type="text"
                name="task"
                placeholder="task"
                value={formData.task}
                onChange={handleChange}
                />
                <button>Add a new todo!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;