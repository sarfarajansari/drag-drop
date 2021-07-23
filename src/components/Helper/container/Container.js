import React from 'react';
import "./container.css"

const Container = (props) => {
    return (
        <div className={props.noPadding?"flex-container no-padding":"flex-container"} >
            <h3>{props.title}</h3>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Container;
