import React, { Component } from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import Contentum from "./Contentum.png";
import OpenLibrarySearch from "./OpenLibrarySearch.png";
import DashyBoards from "./DashyBoards.png";

class Accomplishments extends Component {
  render() {
    return (
      <div className="projects">
        <Link style={{textDecoration: "none"}} to="/" className="backButton">
          X
        </Link>
        <div className="projectsWrapper">
          <div className="singleProjectBox">
            <a className="projectLinks" href="https://contentum.now.sh/#/">
              <h1>Contentum</h1>
              <p style={{ color: "white", maxWidth: "450px" }}>
                A content management application where users can store their
                text, pictures and video for easy access on their external
                website.
              </p>
              <br />
              <img src={Contentum} />
            </a>
            <ul>
              <lh>Technologies Used Include:</lh>
              <li>React</li>
              <li>Redux</li>
              <li>Node</li>
              <li>TinyMCE</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="singleProjectBox">
            <a
              className="projectLinks"
              href="https://openlibrarysearch.now.sh/#/"
            >
              <h1>Open Library Search</h1>
              <p style={{ color: "white", maxWidth: "450px" }}>
                Search through thousands of online books that are free to read
                online!
              </p>
              <br />
              <img src={OpenLibrarySearch} />
            </a>
            <ul>
              <lh>Technologies Used Include:</lh>
              <li>React</li>
              <li>Node</li>
              <li>OpenLibrary.org Web API</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="singleProjectBox">
            <a className="projectLinks" href="https://dashyboards.now.sh/#/">
              <h1>Dashy Boards</h1>
              <p style={{ color: "white", maxWidth: "450px" }}>
                A Monitoring and Incident management tool designed with Incident
                Management teams in mind.
              </p>
              <br />
              <img src={DashyBoards} height="450px" width="450px" />
            </a>

            <ul>
              <lh>Technologies Used Include:</lh>
              <li>React</li>
              <li>Redux</li>
              <li>Node</li>
              <li>ChartsJS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Accomplishments;
