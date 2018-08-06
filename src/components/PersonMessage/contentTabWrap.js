import { Tabs } from 'antd';
import React, { Component } from 'react';
import ContentTabCourse from './contentTabCourse.js';
import ContenTabSatisfiled from './contenTabSatisfiled.js';
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

export default class ContentTabWrap extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { LessonInfo,satisFiledList ,Actions,popover,router}=this.props
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="课程信息" key="1">
                <ContentTabCourse 
                 router={router}
                 LessonInfo={LessonInfo}
                 popover={popover}
                 Actions={Actions}
                 />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                <ContenTabSatisfiled
                router={router}
                 popover={popover}
                  Actions={Actions}
                 satisFiledList={satisFiledList}/>
                 </TabPane>
            </Tabs>
        );
    }
}
