import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import GameHead from '../components/GameHead/GameHead';
import GameBody from '../components/GameBody/GameBody';
import './Game.css';

const Game = props => {
  const {
    btns, score, bestScore, title, description, Actions, newBtn, addScore
  } = props;
  return (
    <div className="game-wrap">
      <GameHead
        score={score}
        bestScore={bestScore}
        title={title}
        description={description}
        Actions={Actions}
        addScore={addScore}
      />
      <GameBody btns={btns} Actions={Actions} newBtn={newBtn} />
    </div>
  );
};


function mapStateToProps(state) {
  const {
    btns, score, bestScore, title, description, newBtn, addScore
  } = { ...state };
  return {
    btns, score, bestScore, title, description, newBtn, addScore
  };
}

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
