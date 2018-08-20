import React, { Component } from 'react';
import GameBtn from '../GameBtn/GameBtn';
import './GameBody.css';

let mx = 0;
let my = 0;
export default class GameBody extends Component {
  componentDidMount() {
    const { Actions } = this.props;
    Actions.initHandle();
    window.addEventListener('keypress', e => {
      switch (e.key) {
        case 'w':
          Actions.topHandle();
          break;
        case 'a':
          Actions.leftHandle();
          break;
        case 's':
          Actions.bottomHandle();
          break;
        case 'd':
          Actions.rightHandle();
          break;
        default:
          break;
      }
    });
  }
  handleTouchSonTouchStart = e => {
    mx = e.touches[0].pageX;
    my = e.touches[0].pageY;
  };
  handleTouchEnd = e => {
    const { Actions } = this.props;
    if (mx - e.changedTouches[0].pageX > 30) {
      Actions.leftHandle();
      mx = 0;
      my = 0;
    } else if (mx - e.changedTouches[0].pageX < -30) {
      Actions.rightHandle();
      mx = 0;
      my = 0;
    } else if (my - e.changedTouches[0].pageY > 30) {
      Actions.topHandle();
      mx = 0;
      my = 0;
    } else if (my - e.changedTouches[0].pageY < -30) {
      Actions.bottomHandle();
      mx = 0;
      my = 0;
    } else {
      mx = 0;
      my = 0;
    }
  };
  renderBtns = () => {
    const { btns, newBtn } = this.props;
    const btnsList = btns.map((item, index1) => (
      <div className={`gamebody-row row${index1}`} key={index1}>
        {item.map((item2, index2) =>
          (<GameBtn
            className={`bodybtn num${item2} `}
            key={index2}
            val={item2}
            row={index1}
            col={index2}
            newBtn={newBtn}
          />))}
      </div>));
    return btnsList;
  };
  render() {
    return (
      <div className="gamebody" onTouchStart={this.handleTouchSonTouchStart} onTouchEnd={this.handleTouchEnd}>
        {this.renderBtns()}
      </div>
    );
  }
}
