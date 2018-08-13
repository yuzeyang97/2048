import React, { Component } from 'react';
import HomeworkTab from './HomeworkTab.js'
import './HomeworkTabBar.css'
import { Tabs } from 'antd';
import HomeworkList from '../HomeworkList/HomeworkList.js'

const TabPane = Tabs.TabPane;


export default class HomeworkTabBar extends Component {
    constructor() {
        super()
        this.state = {
            nowView: 'currentUnreview'
        }
    }
    callback = (activeKey) => {
        const { Actions } = this.props
        this.setState({
            nowView: activeKey
        })
        Actions.searchHomework('')
    }
    render() {
        const { entities, homework, Actions } = this.props
        const homeWork = [{
            title: '我的未点评',
            key: 'currentUnreview'
        },
        {
            title: '我的点评历史',
            key: 'currentReview'
        },
        {
            title: '全部未点评',
            key: 'allUnreview'
        },
        {
            title: '全部点评历史',
            key: 'allReview'
        }]
        return (
            <div className="homeworktabbar">
                <Tabs defaultActiveKey="currentUnreview" onChange={this.callback}>
                    {
                        homeWork.map((item) => {
                            return (
                                <TabPane tab={<HomeworkTab title={item.title} entities={entities} homework={homework} belong={item.key} />} key={item.key}>
                                    <HomeworkList entities={entities} homework={homework} Actions={Actions} belong={item.key} nowView={this.state.nowView} />
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }
}