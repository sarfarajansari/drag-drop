import React, { useEffect } from "react";
import Container from "../Helper/container/Container";
import WheelContainer from "./wheelContainer";
import "./config.css";

const Configuration = (props) => {
  useEffect(() => {
    let el = document.getElementsByClassName("config-btns-container-parent")[0];
    let el2 = document.getElementsByClassName("content-bottom")[0];
    el.style.height =
      String(el2.getBoundingClientRect().y - el.getBoundingClientRect().y) +
      "px";
    el.style.animation = "show 300ms forwards";
  }, []);

  return (
    <Container title={"Configuration"}>
      {props.POs.map((p, i) => {
        return <WheelContainer id={"wheel" + String(i)} key={i} p={p} />;
      })}

      <div className="config-btns-container-parent">
        <div className="config-btns-container">
          <button>
            <span>+</span> Add new Trailer
          </button>
          <button>Full Preview</button>
        </div>
      </div>
    </Container>
  );
};

export default Configuration;
