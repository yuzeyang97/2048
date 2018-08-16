import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import GameHead from '../components/GameHead/GameHead';
import GameBody from '../components/GameBody/GameBody';
import './Game.css';

const Game = props => {
  const {
    btns, score, bestScore, title, description, Actions
  } = props;
  console.log(props);
  return (
    <div className="game-wrap">
      <GameHead
        score={score}
        bestScore={bestScore}
        title={title}
        description={description}
        Actions={Actions}
      />
      <GameBody btns={btns} Actions={Actions} />
    </div>
  );
};


function mapStateToProps(state) {
  const {
    btns, score, bestScore, title, description
  } = { ...state };
  return {
    btns, score, bestScore, title, description
  };
}

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
