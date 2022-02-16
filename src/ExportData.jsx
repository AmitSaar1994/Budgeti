import React, { Component } from "react";
import {render} from "react-dom"
import axios from 'axios';


class ExportData extends Component{
    state = {
        name: ''
     }

     changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
      }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
    
        axios.post('https://sheet.best/api/sheets/dfbe7b03-f9ef-45a2-aa05-82600f0494b4', this.state)
        .then(response => {
          console.log(response);
        })
      }


    render(){
        const {name}=this.state;
        return (
        <div>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>Send</button>
        </div>
        )
    }

}

export default ExportData;