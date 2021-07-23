import React, { useState } from "react";
import "./content.css";
import Details from "../Details/details";
import Button from "../Helper/button/button";
import PoNumbers from "../Po-Numbers/poNumber";
import Configuration from "../Configuration/Configuration";
import data from "./wheeldata";
import Num from "./poData";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Content = () => {
  const [POs, setPOs] = useState(data);
  const [Numbers, setNumbers] = useState(Num);
  const forceUpdate = useForceUpdate();


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
        let pos = POs;
        for (let j = 0; j < pos[i].length; j++) {
          if (!pos[i][j].value) {
            pos[i][j].value = true;
            pos[i][j].po = Numbers[index];
            let num = Numbers;
            num.splice(index, 1);

            setPOs(pos)
            setNumbers(num);
            forceUpdate();
            break;
          }
        }
        break;
      }
    }
    callback();
  };

  return (
    <div className="box-element content-container">
      <div className="content-top">
        <div>
          <PoNumbers drop={drop} Numbers={Numbers} />
        </div>
        <div>
          <Configuration POs={POs} />
        </div>
        <div>
          <Details />
        </div>
      </div>
      <div className="content-bottom">
        <Button type={"secondary"}>Cancel</Button>
        <Button type={"primary"}>Proceed</Button>
      </div>
    </div>
  );
};

export default Content;
