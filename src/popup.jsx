import React from "react";
import {render} from "react-dom"

function Popup () {
    return (
        <div>
            <h1> hello world</h1>
            <p>simple pop up</p>
        </div>
    );
}

render(<Popup/>, document.getElementById("react-target"))