import { Tabs } from 'antd';
import React, { Component } from 'react';
import ContentTab from './contentTab.js';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

export default class ContentTabWrap extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { onlineCourse, CourseTitle, historyCourse }=this.props
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="课程信息" key="1">
                <ContentTab 
                 onlineCourse={onlineCourse}
                 CourseTitle={CourseTitle}
                 historyCourse={historyCourse}/>
                </TabPane>
                <TabPane tab="满意度反馈" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        );
    }
}
