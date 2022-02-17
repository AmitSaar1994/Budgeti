import React, { Component } from "react";
import {render} from "react-dom"
import axios from 'axios';
import 'regenerator-runtime/runtime';
import "babel-polyfill";


class ExportData extends Component{
    state = {name: '',taburl: '', tabDoc: '', tabId: ''}

    async componentDidMount(){
        //get active tab url
        await (chrome.tabs.query({ active: true }, (result) => {
            // eslint-disable-next-line prefer-destructuring, prefer-const
            let tab = result[0];
            console.log("tab data",tab)
            let id = tab.id;
            console.log("id",id)
            this.setState(Object.assign({taburl: tab.url, tabId: tab.id}))}))


            //NOT WORKING
/*         await (chrome.tabs.get(this.state.tabId, (tab) => {
            console.log("DOC Started")
            chrome.scripting,executeScript({
                target: {tabId: tab.id},
                func: () => {
                    let doc= new XMLSerializer().serializeToString(document);
                    console.log("DOC",doc)
                    return doc;
                },
            },
            )
        })) */
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
        const {name,taburl}=this.state;

        return (
        <div>
            <label>Name</label>
            <h1>{taburl}</h1>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>Send</button>
        </div>
        )
    }

}

export default ExportData;