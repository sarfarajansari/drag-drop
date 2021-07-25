import React from "react";
import "./content.css";
import Details from "../Details/details";
import Button from "../Helper/button/button";
import PoNumbers from "../Po-Numbers/poNumber";
import Configuration from "../Configuration/Configuration";


const Content = () => {

  return (
    <div className="box-element content-container">
      <div className="content-top">
        <div>
          <PoNumbers/>
        </div>
        <div>
          <Configuration />
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
