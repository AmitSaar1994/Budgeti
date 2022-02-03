import React from "react";
import {render} from "react-dom"

function Popup () {
    return (
        <div>
            <h1>Budgeti</h1>
            <p>Click on the button the extract data</p>
            <button>Let's do it!</button>
        </div>
    );
}

render(<Popup/>, document.getElementById("react-target"))