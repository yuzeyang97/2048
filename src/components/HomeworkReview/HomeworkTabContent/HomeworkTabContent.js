import React, { Component } from 'react';
import HomeworkTab from './HomeworkTab.js'
import './HomeworkTabBar.css'
import { Tabs } from 'antd';
import HomeworkList from '../HomeworkList/HomeworkList.js'

const TabPane = Tabs.TabPane;


export default class HomeworkTabBar extends Component {
    constructor(){
        super()
        this.state={
            nowView:'currentUnreview'
        }
    }
    callback=(activeKey)=>{
        const {Actions } = this.props
        this.setState({
            nowView:activeKey
        })
        Actions.searchHomework('')
    }
    render() {
        const { entities, homework,Actions } = this.props
        return (
            <div className="homeworktabbar">
                <Tabs defaultActiveKey="currentUnreview" onChange={this.callback}>
                    <TabPane tab={<HomeworkTab title="我的未点评" entities={entities} homework={homework} belong='currentUnreview' />} key="currentUnreview">
                        <HomeworkList entities={entities} homework={homework} Actions={Actions} belong='currentUnreview' nowView={this.state.nowView} />
                    </TabPane>
                    <TabPane tab={<HomeworkTab title="我的点评历史" entities={entities} homework={homework} belong='currentReview' />} key="currentReview">
                        <HomeworkList entities={entities} homework={homework} Actions={Actions} belong='currentReview' nowView={this.state.nowView} />
                    </TabPane>
                    <TabPane tab={<HomeworkTab title="全部未点评" entities={entities} homework={homework} belong='allUnreview' />} key="allUnreview">
                        <HomeworkList entities={entities} homework={homework} Actions={Actions} belong='allUnreview' nowView={this.state.nowView} />
                    </TabPane>
                    <TabPane tab={<HomeworkTab title="全部点评历史" entities={entities} homework={homework} belong='allReview' />} key="allReview">
                        <HomeworkList entities={entities} homework={homework} Actions={Actions} belong='allReview' nowView={this.state.nowView} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}