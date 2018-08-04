import React from "react";
import "./Header.css";


const Header = props => (
  <div className="row header">
    <div className="col-sm-4 text-center pt-1">
      <a href="/">Clicky Game</a>
    </div>
    <div className="col-sm-4 text-center pt-1">
      <div>{/*Message Here */}Message</div>
    </div>
    <div className="col-sm-4 text-center pt-1">
      <div className="row">
        <div className="col-sm-6">
          <div className="score-div">Score: {props.currentScore} </div>
        </div>
        <div className="col-sm-6">
          <div className="topScore-div">Top Score: {props.totalScore} </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;