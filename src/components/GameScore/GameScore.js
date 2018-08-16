import React from 'react';
import ScoreBtn from '../ScoreBtn/ScoreBtn';
import './GameScore.css';

const GameScore = props => {
  const { score, bestScore, title } = props;
  return (
    <div className="gamescore">
      <div className="gamescore-title">
        {title}
      </div>
      <div className="scorebtn-wrap">
        <ScoreBtn score={score} title="Scores" />
        <ScoreBtn score={bestScore} title="Best Score" />
      </div>
    </div>
  );
};

export default GameScore;
