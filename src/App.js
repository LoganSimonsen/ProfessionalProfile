import React, { Component } from "react";
import Header from "./components/Header";
// import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import image1 from "./screenCapPDF.png";
import headShot from "./headShot4.jpg";

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
        <div className="profileWrapper">
          <img src={headShot} className="headShot" />
          <h1 style={{ margin: "5px" }}>LOGAN SIMONSEN</h1>
          <h2 style={{ margin: "5px" }}>FULL STACK WEB DEVELOPER</h2>

          <div
            style={{
              borderBottom: "white solid",
              width: "40vw",
              borderRadius: "50%"
            }}
          />
          <h4 style={{ margin: "15px" }}>CONTACT</h4>
          <p>469-667-9845</p>
          <p>LOGANSIMONSEN@HOTMAIL.COM</p>

          <a
            className="buttonLinks"
            href="https://www.linkedin.com/in/logan-simonsen/"
          >
            LinkedIn
          </a>
          <br />
          <a className="buttonLinks" href="https://github.com/LoganSimonsen">
            GitHub
          </a>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
