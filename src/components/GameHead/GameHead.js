import React from 'react';
import GameScore from '../GameScore/GameScore';
import GameExtraView from '../GameExtraView/GameExtraView';
import './GameHead.css';

const GameHead = props => {
  const {
    score, bestScore, title, description, Actions, addScore
  } = props;
  return (
    <div className="gamehead">
      <GameScore title={title} score={score} bestScore={bestScore} addScore={addScore} />
      <GameExtraView description={description} Actions={Actions} />
    </div>
  );
};

export default GameHead;
