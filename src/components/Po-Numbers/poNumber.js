import React from "react";
import Container from "../Helper/container/Container";
import "./poNumber.css";
import Number from "./Number";
import { useSelector, useDispatch } from "react-redux";
import action from "../../redux/action";

const PoNumbers = (props) => {
  const Numbers = useSelector((state) => state.PONumber);
  const WheelNumbers = useSelector((state) => state.wheel);
  const dispatch = useDispatch();

  const drop = (x, y, index, callback) => {
    let dropBoxs = document.getElementsByClassName("wheel-container");

    for (var i = 0; i < dropBoxs.length; i++) {
      let rect = dropBoxs[i].getBoundingClientRect();

      if (
        x > rect.x &&
        x < rect.x + rect.width &&
        y > rect.y &&
        y < rect.y + rect.height
      ) {
        let pos = WheelNumbers;

        for (let j = 0; j < pos[i].length; j++) {
          if (!pos[i][j].value) {
            let payload = {
              objIndex: i,
              num: Numbers[index],
              index: index,
            };

            dispatch(action("REMOVEPO", index));
            dispatch(action("DROP", payload));
            break;
          }
        }
        break;
      }
    }
    callback();
  };

  const Drag = (e) => {
    var prevX = e.clientX;
    var prevY = e.clientY;
    const el = e.target;

    const mousemove = (e) => {
      e.preventDefault();
      var newX = prevX - e.clientX;
      var newY = prevY - e.clientY;
      el.style.left = -newX + "px";
      el.style.top = -newY + "px";
    };
    const mouseup = (e) => {
      window.removeEventListener("mousemove", mousemove);
      document.getElementsByTagName("body")[0].style.userSelect = "";
      window.removeEventListener("mouseup", mouseup);
      const setBack = () => {
        el.style.left = 0 + "px";
        el.style.top = 0 + "px";
      };

      let els = document.getElementsByClassName("PoNumber");
      let index = -1;
      for (var i = 0; i < els.length; i++) {
        if (els[i] === el) {
          index = i;
        }
      }
      drop(e.clientX, e.clientY, index, setBack);
    };
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
  };


  return (
    <Container title={"PO Number"} noPadding={true}>
      {Numbers.map((n, i) => {
        return <Number remove={()=>dispatch(action("REMOVEPO", i))} key={i} drag={Drag} n={n} />;
      })}
    </Container>
  );
};

export default PoNumbers;
