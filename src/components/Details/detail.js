import React from 'react';

const Detail = (props) => {
    return (
        <div className="detail">
            <p>{props.name}</p>
            <p>: <span>{props.value}</span></p>
        </div>
    );
}

export default Detail;
