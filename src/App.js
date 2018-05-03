import React, { Component } from "react";
import Header from "./components/Header";
// import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image1 from "./screenCapPDF.png";
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
          <h1 style={{ margin: "15px" }}>LOGAN SIMONSEN</h1>
          <h2 style={{ margin: "15px" }}>FULL STACK WEB DEVELOPER</h2>

          <div style={{ borderBottom: "white solid", width: "40vw", borderRadius: "50%" }} />
          <h4 style={{ margin: "15px" }}>CONTACT</h4>
          <p>469-667-9845</p>
          <p>LOGANSIMONSEN@HOTMAIL.COM</p>

          <a href="https://www.linkedin.com/in/logan-simonsen/">
            <img
              src="https://png.icons8.com/metro/1600/linkedin.png"
              style={{ zoom: "0.01", color: "blue" }}
            />{" "}
            https://www.linkedin.com/in/logan-simonsen/
          </a>
          <a href="https://github.com/LoganSimonsen">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASpSURBVGhD7ZpHqGRFFIafOecICuZZKIpgAEFUVMwLw6gzDjMmREwbN7o2p4WKoDuzmFExIRgX5gyiImZRUTBHjN/3pgsOh7re292357noHz7o7jpVde+tuqfOOe/NTDXVVMtUG8PRcCHcBU/DywOeGvxm23zQ9n+ldeFMeAn+hn86ou3zYF/HmDM5+SXwA9QudBi+B1dqmd/QEvgKahc1Dl/CIpi41oJboHYRBVfoIXC1ToPjBvj5UngY2lbROdaEiWgTeBVqE/8Jt8OBsCK0SZtDwD72rY2pg3DOXrURvAu1Ce+GbWBUbQf3QW1s53TuXuR2eh3yJN/CkdCXjgLHzPPoDXvZZrdBHvx92Bb6lmN+AHm+m2Es6Z3yoO/BpjApbQbOkecd2ZutB9nFfgO1lThrwA6z34bTOuCLf+zst6Vyju8gzq1rHumc0X3GgeQIyJoHpd3T+l7YGtrkRV0GP0HpvzMUHQPl98JFMJScJPv6e6CmAyDaydewK6wCO8F+oGPYF7aCzeFtyP0WQNT9ENtdpaFWxfgnDvAHNL3cB0G0LXwMv6TfCk1nxwkQ5Wr/BdHmdOisFyB2vgOa5BOPtuPgimXdCdHmOegkw+scxXpiN2kl+Bmi/ajUDr+DIdq4QhtCq8wnYkcj0xWgSTvCjxD7jIIPr+ZifVB5fA/PVukZYieDvCatD59CtB+H38EHk/UoRLsLoFV5T+qGm3QdRNs+eAKydNPRxmCzVc9A7NTkJVyNXyHa9oXeKip7UdPmVr0GsZO5RE2HQbTrk5MgyncntptOtCrnHMdDTSdDtOuTcyHqRIjtnW4kb62zoaZDIdr1ySkQdQ7E9k5bK7/sdroKrgY9munq5XATRLs+ORUMaRbDXnADxPZOL7vVjNjJGzFYPG+A7ReDN/URRNs+0AUbWTwC5kLm79nFnw+tygeicdFuUMvFTVP7OAwLxma7QNHqsDvk2KzTgWiYkEOUw6FJBo191La8CSuQWc4d7QxRNoBOsgIYO1scKNoTboX9Z78t1fbwOMQ+w2AgGHORqAch2j4LnXUGxM6uUMz+fNldbs+SqD3gSngLYv8aprPXwj7QJOfMYbz1sc4yeTFYjAPEmGt5MJSopb4rwxWQLyBzDawK/yVf+NjHKsvQ6a6eKQ4iC6HIreBK6VF0lb5b7t22SmTkAWiKrD2Is32nYDHLOzfhjwPpoXwfimqlomGpHbhGwHlHfAFrw0jKMY54dmwBylV4A7LNMFipiVvMnL6WGsQqy0iyOJYHtYhWVsYCgwemL262K7jXra7U2sSzQpk2fwK5/UYYW5YrX4Q8uGdHjIx1y9mmsBosB7H0E7F6YmBYa/co8GDsRW6hpiK2f0LQTcYb0cO9Gb4XlaKbY9mvtH8WPkfegVoeP5Ys8Vvqr02o93pl8PlD8OlvOfguReVG9gZPbN13scm4C3q/iSK3WZt7/Q0eAyPm8ptRrCXVklFqU9pqXA9rwMSlN9Md1i5iHD6HXG2cuDxnDOmzvx8Ft5yhuQXtOZM3ZGxmMNcWlkS0tY/FjTm9gZqsABqu+HQtsz4J5R8G/OxvtmnTORSfaqqpxtXMzL/hP7AqLRE9gwAAAABJRU5ErkJggg=="
              style={{ zoom: "0.4" }}
            />
            https://github.com/LoganSimonsen
          </a>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
