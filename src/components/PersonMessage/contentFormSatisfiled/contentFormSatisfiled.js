import React, { Component } from 'react';
import { Table, Icon } from 'antd';
import './contentFormSatisfiled.css'
const CourseTitle = [{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name'
}, {
    title: '开课时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '老师',
    dataIndex: 'teacher_info.nick',
    key: 'teacher_info.nick',
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
    showTeacherMsg = (record) => {
        const { Actions } = this.props
        Actions.showPopover(record)
    }
    changeStatus = (record) => {
        const { Actions } = this.props
        console.log(record,33333333333)
        Actions.changeSatisfiled(record)
    }
    rowKey = (record, i) => `${record.class_info && record.class_info.id}_${i}`
    render() {
        console.log(this.props)
        const { result, entities } = this.props.satisFiledList
        let newresult = result
        if (result) {
            newresult = result.map(item => {
                const satisfiled = entities.satisfiled[item];
                return {
                    ...satisfiled,
                    class_info: entities.classes[satisfiled.class_info],
                    teacher_info: entities.teachers[satisfiled.teacher_info]
                }
            });
        }
        CourseTitle[5].render = (text, record, index) => {
            return (text ? <span>已回复</span> : <span onClick={this.changeStatus.bind(this, record)} className='waitReply'>待回复<Icon type="mail" /></span>)
        }
        CourseTitle[2].render = (text, record, index) => {
            return (<span onClick={this.showTeacherMsg.bind(this, record)} className='waitReply'><Icon type="qq" />{text}</span>)
        }
        return (
            <div className="contentForm-wrap">
                <Table dataSource={newresult} columns={CourseTitle} pagination={false} rowKey={this.rowKey} bordered />
            </div>
        );
    }
}
