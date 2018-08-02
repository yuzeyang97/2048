import React, { Component } from 'react';
import { Table,Icon } from 'antd';
import './contentFormSatisfiled.css'
const CourseTitle= [{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name'
}, {
    title: '开课时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '老师',
    dataIndex: 'nick',
    key: 'nick',
}, {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score'
}, {
    title: '具体反馈',
    dataIndex: 'satisfied_detail',
    key: 'satisfied_detail'
}, {
    title: '操作',
    dataIndex: 'reply_status',
    key: 'reply_status'
}]
export default class ContentForm extends Component {
    constructor(props) {
        super(props)
        
    }
    changStatus=(index)=>{
        const {Actions}=this.props
        Actions.changeSatisfiled(index)
    }
    showTeacherMsg=(record)=>{
        const {Actions}=this.props
        Actions.showPopover(record)
    }
    render() {
        const {satisFiledList}=this.props;
        CourseTitle[5].render=(text,record,index) => {
            return (text?<span>已回复</span>:<span onClick={this.changStatus.bind(this,index)} className='waitReply'>待回复<Icon type="mail"/></span>)
        }
        CourseTitle[2].render=(text,record,index) => {
            return (<span onClick={this.showTeacherMsg.bind(this,record)} className='waitReply'><Icon type="qq"/>{text}</span>)
        }
        return (  
            <div className="contentForm-wrap">
                <Table dataSource={satisFiledList} columns={CourseTitle} pagination={false} bordered  />
            </div>
        );
    }
}
