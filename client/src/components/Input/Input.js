import React from 'react';
import "./Input.css";

const Input = (props) => (
    <div className="form-group">
        <input className="form-control" {...props} />
    </div>
);

export default Input;