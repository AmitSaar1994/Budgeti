import React, { Component } from "react";
import {render} from "react-dom"

class ExportData extends Component{
    exportToExcel = () => console.log("hi");


    render(){
        return (
        <div>
            <button onClick={this.exportToExcel}>Let's do it!</button>
        </div>
        )
    }

}

export default ExportData;