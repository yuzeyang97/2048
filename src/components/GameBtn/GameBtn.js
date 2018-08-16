import React, { Component } from 'react';
import './GameBtn.css';

export default class GameBtn extends Component {
  constructor() {
    super()
    this.state={
      className:''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.val != nextProps.val&&nextProps.val!=0)
      this.setState({ ...nextProps, className: nextProps.className + 'active' })
    else
      this.setState({ ...nextProps, className: nextProps.className });
  }
  render() {
    console.log(this.state)
    const { className, val } = this.props;
    return (
      <div className={this.state.className}> {val} </div>
    );
  }
}
