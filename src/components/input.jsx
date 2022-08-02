import './submitdata.css';
import React from "react";

const Inpuform = (props) => {
    return <div className='input'>
        <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
    </div>
}
export default Inpuform;