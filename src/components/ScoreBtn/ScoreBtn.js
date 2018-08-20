import React, { Component } from 'react';
import AddScoreView from '../AddScoreView/AddScoreView';
import './ScoreBtn.css';

export default class ScoreBtn extends Component {
  taobi() { }
  render() {
    const { score, title, addScore } = this.props;
    return (
      <div className="scorebtn">
        <div className="scorebtn-title">
          {title}
        </div>
        <div className="scorebtn-score">
          {score}
        </div>
        {title == 'Scores' ? <AddScoreView addScore={addScore} /> : ''}
      </div>
    );
  }
}
