import React from 'react';

function Input({processNumber, placeholder, onChange}) {

    return (
        <input
            type='text'
            value={processNumber}
            placeholder={placeholder}
            onChange={onChange}
        />          
    )
}

export default Input;