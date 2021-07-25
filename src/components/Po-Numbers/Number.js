import React from "react";
import { GrFormClose } from "react-icons/gr";

const Number = (props) => {


  return (
    <p onMouseDown={props.drag} className="PoNumber">
      {"#" + String(props.n)}
      <span>
        <GrFormClose onClick={props.remove} />
      </span>
    </p>
  );
};

export default Number;
