import React from "react";
import './submitdata.css';
import Inpuform from "./input";

const Addform = (props) => {
    return <form className="form">
    <Inpuform label='Amount'
        input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}
    />
    <button>+ Add</button>
    </form>
}

export default Addform;