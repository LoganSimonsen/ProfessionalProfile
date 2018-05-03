import React, { Component } from "react";
import Header from "./components/Header";
// import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image1 from "./screenCapPDF.png";

let count = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      type: [],
      array: ["W", "e", "l"]
    };
  }

  // <img src={image1} className="PDF" />

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Header />
        <img src={image1} className="PDF" />
        {routes}
      </div>
    );
  }
}

export default App;
