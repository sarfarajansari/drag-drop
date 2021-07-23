import React from 'react';
import Container from '../Helper/container/Container';
import WheelContainer from './wheelContainer'
import "./config.css"

const Configuration = (props) => {
    
    return (
        <Container title={"Configuration"}>
            {props.POs.map((p,i) => {
                return <WheelContainer id={"wheel" + String(i)} key={i} p={p}/>
            })}

            <div className="config-btns-container-parent">
                <div className="config-btns-container">
                    <button><span>+</span> Add new Trailer</button>
                    <button>Full Preview</button>
                </div>
            </div>

        </Container>
    );
}

export default Configuration;
