import React from 'react';
import Container from '../Helper/container/Container'
import "./poNumber.css"
import Number from './Number';
const PoNumbers = (props) => {
    return (
        <Container title={"PO Number"} noPadding={true}>
            {props.Numbers.map((n)=>{
                return <Number drop={props.drop} n={n}/>
            })}
        </Container>
    );
}

export default PoNumbers;
