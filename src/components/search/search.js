import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, Input } from 'antd';
import './search.css'


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputValue:''
    }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">mid</Menu.Item>
      </Menu>
    );
    return (
      <div className="search-wrap">
        <Dropdown overlay={menu}>
          <Button>
            mid <Icon type="down" />
          </Button>
        </Dropdown>
        <Input onChange={this.changeValue} placeholder='请输入MID' /><Button type="primary" onClick={this.handle}>搜索</Button>
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
  }
}