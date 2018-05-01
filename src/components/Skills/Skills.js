import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class Skills extends Component {
  constructor() {
    super();
    this.clickedReact = this.clickedReact.bind(this);
  }
  clickedReact(event) {
    window.open(
      "https://github.com/LoganSimonsen?utf8=%E2%9C%93&tab=repositories&q=&type=&language="
    );
  }
  render() {
    return (
      <div className="story">
        <Link to="/" className="backButton">
          X
        </Link>
        <i class="devicon-javascript-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">JavaScript</span>
        </i>
        <i className="devicon-react-original icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">React</span>
        </i>
        <i class="devicon-html5-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">HTML5</span>
        </i>
        <i class="devicon-css3-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">CSS3</span>
        </i>
        <i class="devicon-nodejs-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">Node</span>
        </i>
        <i class="devicon-express-original icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">Express</span>
        </i>
        <i class="devicon-postgresql-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">PostgreSQL</span>
        </i>
        <i class="devicon-git-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">Git</span>
        </i>
        <i class="devicon-github-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">GitHub</span>
        </i>
        <i class="devicon-bootstrap-plain icons" onClick={this.clickedReact}>
          <br />
          <span className="skillName">Bootstrap</span>
        </i>
        <div>
          <div className="hr">
            <hr />
          </div>
          <br />
        </div>
        <h1 style={{ color: "white" }}>Skills in Progress...</h1>
        <i class="devicon-java-plain icons">
          <br />
          <span className="skillName">Java</span>
        </i>
        <i class="devicon-python-plain icons">
          <br />
          <span className="skillName">Python</span>
        </i>
        <i class="devicon-vuejs-plain icons">
          <br />
          <span className="skillName">Vue</span>
        </i>
      </div>
    );
  }
}

export default Skills;
