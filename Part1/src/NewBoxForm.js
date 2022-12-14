import React, { useState } from "react";
import uuid from "uuid/v4";

function NewBoxForm({ addBox }) {
    const initialState = {
        height: '',
        width: '',
        backgroundColor: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(initialState);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleChange}
            />
           
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />
        
            <div>
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="background color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            </div>
            <button>Add a new box!</button>
        </form>
        </div>
    );
    }

export default NewBoxForm;