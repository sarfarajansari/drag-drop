import React from 'react';
import Container from '../Helper/container/Container'
import "./details.css";
import Detail from './detail';

const Details = () => {
    return (
        <Container title={"Details"}>
            <Detail name={"Approximate Distance "} value={"400KM"}/>
            <Detail name={"Time Travel "} value={200}/>
            <Detail name={"Weight"} value={"1.5 ton"}/>
            <Detail name={"Quantity"} value={200}/>
        </Container>
    );
}

export default Details;
