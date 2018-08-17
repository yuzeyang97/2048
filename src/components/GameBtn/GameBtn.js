import React, { Component } from 'react';
import './GameBtn.css';

export default class GameBtn extends Component {
  constructor() {
    super();
    this.state = {
      className: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    if (
      (nextProps.val % this.props.val == 0 && nextProps.val != 0 && nextProps.val != this.props.val) ||
      (nextProps.newBtn ? (nextProps.row == nextProps.newBtn[0] && nextProps.col == nextProps.newBtn[1]) : false)
    ) {
      this.setState({ ...nextProps, className: `${nextProps.className} active` });
    } else {
      this.setState({ ...nextProps, className: nextProps.className });
    }
  }
  render() {
    console.log(this.state);
    const { val } = this.props;
    return (
      <div className={this.state.className}> {val} </div>
    );
  }
}
