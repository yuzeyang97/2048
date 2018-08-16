import React, { Component } from 'react';
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
      console.log('左移动 30 个像素以上');
      mx = 0;
      my = 0;
    } else if (mx - e.changedTouches[0].pageX < -30) {
      Actions.rightHandle();
      console.log('右移动 30 个像素以上');
      mx = 0;
      my = 0;
    } else if (my - e.changedTouches[0].pageY > 30) {
      Actions.topHandle();
      console.log('上移动 30 个像素以上');
      mx = 0;
      my = 0;
    } else if (my - e.changedTouches[0].pageY < -30) {
      Actions.bottomHandle();
      console.log('下移动 30 个像素以上');
      mx = 0;
      my = 0;
    } else {
      console.log('没动');
      mx = 0;
      my = 0;
    }
  };
  renderBtns = () => {
    const { btns } = this.props;
    const btnsList = btns.map((item, index) => (
      <div className={`gamebody-row row${index}`} key={index}>
        {item.map((item2, index) => <div className={`bodybtn num${item2} `} key={index}>{item2}</div>)}
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
