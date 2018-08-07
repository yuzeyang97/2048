import React, { Component } from 'react';
import HomeworkTab from './HomeworkTab.js'
import './HomeworkTabBar.css'
import { Tabs } from 'antd';
import HomeworkList from '../HomeworkList/HomeworkList.js'

const TabPane = Tabs.TabPane;


export default class HomeworkTabBar extends Component {
    render() {
        const { entities, homework } = this.props
        return (
            <div className="homeworktabbar">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<HomeworkTab title="我的未点评" entities={entities} homework={homework} belong='currentUnreview' />} key="1">
                        <HomeworkList entities={entities} homework={homework} belong='currentUnreview' />
                    </TabPane>
                    <TabPane tab={<HomeworkTab title="我的点评历史" entities={entities} homework={homework} belong='currentReview' />} key="2">
                        <HomeworkList entities={entities} homework={homework} belong='currentReview' />
                    </TabPane>
                    <TabPane tab={<HomeworkTab title="全部未点评" entities={entities} homework={homework} belong='allUnreview' />} key="3">
                        <HomeworkList entities={entities} homework={homework} belong='allUnreview' />
                    </TabPane>
                    <TabPane tab={<HomeworkTab title="全部点评历史" entities={entities} homework={homework} belong='allReview' />} key="4">
                        <HomeworkList entities={entities} homework={homework} belong='allReview' />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}