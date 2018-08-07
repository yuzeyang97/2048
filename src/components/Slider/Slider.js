import React, { Component } from 'react';
import { Layout,Menu,Icon} from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
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
export default class Header extends Component {
    handleClick = (e) => {
        if(e.key==2)
        {window.location.href='/homeworkReview/1001'}
      }
    
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={this.handleClick}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" />TIA</span>}>
                        <Menu.Item key="1">学员档案</Menu.Item>
                        <Menu.Item key="2">作业点评</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}



