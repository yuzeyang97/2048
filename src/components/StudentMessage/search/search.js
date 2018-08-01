import React, { Component } from 'react';
import {Input,Button} from 'antd';
import './search.css'


export default class Search extends Component {
    constructor(props) {
      super(props)
  
    }
    render() {
      return (
        <div className="search-wrap">
                <Input onChange={this.changeValue}/><Button type="primary" onClick={this.console}>搜索</Button>
        </div>
      );
    }
    changeValue=(e)=>{
      this.setState({
        inputValue:e.target.value
      })
    }
    console=()=>{
      this.props.search(this.state.inputValue)
    }
  }