import React, { Component } from 'react';
import {Layout,Dropdown, Menu ,Icon} from 'antd';
const { Header } = Layout;
const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );  
export default class HeaderWrap extends Component{
    render(){
        return(
        <Header className="header">
            <div className="header-logo">TIA</div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    Click me <Icon type="down" />
                </a>
            </Dropdown>,
        </Header>
    )
    }
}

