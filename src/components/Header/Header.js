import React, { Component } from 'react';
import {Layout,Dropdown, Menu ,Icon} from 'antd';
import './Header.css'
const { Header } = Layout;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">摄影课</a>
      </Menu.Item>
    </Menu>
  );  
export default class HeaderWrap extends Component{
    render(){
        return(
        <Header className="header">
            <div className="header-logo">TIA</div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    摄影课 <Icon type="down" />
                </a>
            </Dropdown>
        </Header>
    )
    }
}

