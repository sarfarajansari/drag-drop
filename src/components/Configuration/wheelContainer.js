import React from "react";
import { RiRecordCircleFill } from "react-icons/ri";

const WheelContainer = (props) => {
  return (
    <div className={"wheel-container-parent" + props.id}>
      <div className="wheel-container">
        {props.p.map((d, i) => {
          return (
            <div
              key={i}
              className={
                d.value
                  ? d.color + " active div" + String(i + 1)
                  : "div" + String(i + 1)
              }
            >
              {d.value ? i + 1 : <></>}
            </div>
          );
        })}
      </div>
      <div className="wheel">
        <div className="div1">
          <RiRecordCircleFill />{" "}
        </div>
        <div className="div2">
          <RiRecordCircleFill />
        </div>
        <div className="div3">
          <RiRecordCircleFill />
        </div>
      </div>
    </div>
  );
};

export default WheelContainer;
