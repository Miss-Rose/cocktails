import React from 'react';


const Checkbox = ({type, value, checked, onChange, name}) => {

    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={name}>{name}</label>
        </>

    );
}

export default Checkbox;

