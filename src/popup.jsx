import React, { Component } from "react";
import {render} from "react-dom"
import ExportData from "./ExportData";


function Popup () {
    return (
        <div>
            <h1>Budgeti</h1>
            <p>Click on the button the extract data</p>
            <ExportData/>
        </div>
    );
}

render(<Popup/>, document.getElementById("react-target"))
