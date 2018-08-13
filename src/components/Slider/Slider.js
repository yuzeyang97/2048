import React, { Component } from 'react';
import { Layout,Menu,Icon} from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
export default class Header extends Component {
    handleClick = (e) => {
        if(e.key==1)
        {window.location.href='/'}
        if(e.key==2)
        {window.location.href='/homeworkReview/1001'}
        if(e.key==3)
        {window.location.href='/userConfig'}
      }
    
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={this.handleClick}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" />TIA</span>}>
                        <Menu.Item key="1">学员档案</Menu.Item>
                        <Menu.Item key="2">作业点评</Menu.Item>
                        <Menu.Item key="3">权限配置</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}


