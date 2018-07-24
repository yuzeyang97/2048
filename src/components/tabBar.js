import React, { Component } from 'react';
import TabBarBtn from './tabBarBtn';
export default class TabBar extends Component {
    render() {
        return (
            <div className="tabBar">
                {
                    this.props.tabBarBtnList.map((item) => {
                        return <TabBarBtn data={item} />
                    })
                }
            </div>
        )
    }
}