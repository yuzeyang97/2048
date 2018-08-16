import React from 'react';
import './GameExtraView.css';

const GameExtraView = props => {
  const { description, Actions } = props;
  return (
    <div className="gameextra">
      <div className="gameextra-description">
        {description}
      </div>
      <div className="gameextra-btnwrap">
        <div className="gameextra-restartbtn" onClick={Actions.initHandle}>Restart</div>
      </div>
    </div>
  );
};

export default GameExtraView;
