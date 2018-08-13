import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './searchWrap.css'


export default class SearchWrap extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputValue:''
    }
  }
  render() {
    return (
      <div className="searchWrap-wrap">
        <Input onChange={this.changeValue} placeholder='请输入MID' value={this.state.inputValue}/><Button type="primary" onClick={this.handle}>搜索</Button>
      </div>
    );
  }
  changeValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handle = () => {
    this.props.search(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }
}