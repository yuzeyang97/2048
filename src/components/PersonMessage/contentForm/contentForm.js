import React, { Component } from 'react';
import { Table } from 'antd';
import './contentForm.css'

  
export default class ContentForm extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { onlineCourse, CourseTitle, historyCourse }=this.props;
        return (  
            <div className="contentForm-wrap">
                <div className="contentForm-title">在学课程</div>
                <Table dataSource={onlineCourse} columns={CourseTitle} pagination={false} bordered  />
                <div className="contentForm-title">历史课程</div>
                <Table dataSource={historyCourse} columns={CourseTitle} pagination={false}  bordered />
            </div>
        );
    }
}
