import React, { Component, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";
import "babel-polyfill";
import tabGetDocument from "./chrome_api/tabGetDocument";
import getTabData from "./chrome_api/getTabData";

class ExportData extends Component {
  state = { name: "", taburl: "", tabId: "", tabDoc: "" };

  async componentDidMount() {
    getTabData().then((res) => {
      console.log("GetTabData res", res);
      this.setState(
        Object.assign({
          tabId: res.id,
          taburl: res.url,
        })
      );
    });
  }

  tabDoc = (e) => {
    let tabIdInt = parseInt(this.state.tabId);
    tabGetDocument(tabIdInt).then((res) => {
      console.log("RES", res);
    });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post(
        "https://sheet.best/api/sheets/dfbe7b03-f9ef-45a2-aa05-82600f0494b4",
        this.state
      )
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    const { name, taburl, tabId } = this.state;
    return (
      <div>
        <label>Name</label>
        <h1>{taburl}</h1>
        <h1>{tabId}</h1>
        <input
          placeholder="Enter your name"
          type="text"
          name="name"
          value={name}
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}>Send</button>
        <button onClick={this.tabDoc}>TabDoc</button>
      </div>
    );
  }
}

export default ExportData;
