import React from 'react';

const InputField = ({ label, name, type = "text", value, onBlur, onChange, error, touched }) => (
    <div className="input-div">
        {/* <span className='input-title'>{label}</span> */}
        <input
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            name={name}
            // className="input-text"
            value={value}
            placeholder={label}
        />
        <span className='warning-msg'>{touched && error}</span>
    </div>
);

export default InputField;
