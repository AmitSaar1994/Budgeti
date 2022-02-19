import React, { Component } from "react";
import "regenerator-runtime/runtime";
import "babel-polyfill";
import scrapingCalData from "./scrapingCalData";
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
      this.setState(
        Object.assign({
          tabDoc: res,
        })
      );
      console.log(this.state.tabDoc);
      scrapingCalData(this.state.tabDoc);
    });
  };

  render() {
    const { name, taburl, tabId, tabDoc } = this.state;
    return (
      <div>
        <h1>Scraping Data</h1>
        <button onClick={this.tabDoc}>TabDoc</button>
      </div>
    );
  }
}

export default ExportData;
