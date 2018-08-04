import React from "react";
import "./Header.css";


const Header = props => (
  <div class="row header">
    <div class="col-sm-4 text-center pt-1">
      <a href="/">Clicky Game</a>
    </div>
    <div class="col-sm-4 text-center pt-1">
      <div>{/*Message Here */}Message</div>
    </div>
    <div class="col-sm-4 text-center pt-1">
      <div class="row">
        <div class="col-sm-6">
          <div class="score-div">Score: {props.currentScore} </div>
        </div>
        <div class="col-sm-6">
          <div class="topScore-div">Top Score: {props.totalScore} </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;