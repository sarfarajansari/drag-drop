import React from 'react';
import "./button.css"

const Button = (props) => {
    return (
        <button onClick={props.click} className={"btn " + props.type}>
            {props.children}
        </button>
    );
}

export default Button;
