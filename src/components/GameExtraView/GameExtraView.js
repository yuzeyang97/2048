import React from 'react';
import './GameExtraView.css';

const GameExtraView = props => {
  const { description } = props;
  return (
    <div className="gameextra">
      <div className="gameextra-description">
        {description}
      </div>
      <div className="gameextra-btnwrap">
        <div className="gameextra-restartbtn">Restart</div>
      </div>
    </div>
  );
};

export default GameExtraView;
