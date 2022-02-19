import React, { Component } from "react";
import { render } from "react-dom";
import ExportData from "./ExportData";

function Popup() {
  return (
    <div>
      <h1>Budgeti</h1>
      <ExportData />
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
