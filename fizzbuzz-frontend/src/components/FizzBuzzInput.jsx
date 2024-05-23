
import React, { useState } from 'react';
import './FizzBuzzInput.css';  

const FizzBuzzInput = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = inputValue.split(',').map(v => v.trim());
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter comma-separated values"
            />
            <button type="submit" className="submit-button">Process</button>
        </form>
    );
};

export default FizzBuzzInput;
