import React, { Component } from 'react';
import { Table } from 'antd';
import { Icon } from 'antd';
import './contentForm.css'
const renderResult = (prevText, nextText) => {
    if (prevText > 0.95)
        return (<span className='orange-span'>{nextText}</span>)
    if (prevText < 0.8)
        return (<span className='red-span'>{nextText}</span>)
    else
        return (<span>{nextText}</span>)
}
const CourseTitle= [{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
    render: (text) => {
        return (<span><Icon type="info-circle" />{text}</span>)
    }
}, {
    title: '课程状态',
    dataIndex: 'courseState',
    key: 'courseState',
}, {
    title: '开课时间',
    dataIndex: 'courseStart',
    key: 'courseStart',
}, {
    title: '老师',
    dataIndex: 'teacher',
    key: 'teacher'
}, {
    title: '上课率',
    dataIndex: 'courselv',
    key: 'courselv',
    render: (text) => {
        let num1 = parseInt(text.split('/')[0])
        let num2 = parseInt(text.split('/')[1])
        const numValue = num1 / num2
        return renderResult(numValue, text)
    }
}, {
    title: '作业提交率',
    dataIndex: 'homeworklv',
    key: 'homeworklv',
    render: (text) => {
        const baifentext = (text * 100).toFixed(2) + '%'
        return renderResult(text, baifentext)
    }
}, {
    title: '被点评情况',
    dataIndex: 'review',
    key: 'review',
    render: (text) => {
        const baifentext = (text * 100).toFixed(2) + '%'
        return renderResult(text, baifentext)
    }
}, {
    title: '打卡率',
    dataIndex: 'cardlv',
    key: 'cardlv',
    render: (text) => {
        let num1 = parseInt(text.split('/')[0])
        let num2 = parseInt(text.split('/')[1])
        const numValue = num1 / num2
        return renderResult(numValue, text)
    }
}, {
    title: '满意度',
    dataIndex: 'degreelv',
    key: 'degreelv',
    render: (text) => {
        const baifentext = (text * 100).toFixed(2) + '%'
        return renderResult(text, baifentext)
    }
}]
export default class ContentForm extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const { onlineCourse, historyCourse,Actions }=this.props;
        CourseTitle[3].render=(text,record,index) => {
            const showTeacherMsg=(e)=>{
                e.stopPropagation();
                Actions.showPopover(record)
            }
            return (<span onClick={showTeacherMsg} className='waitReply'><Icon type="qq"/>{text}</span>)
        }
        return (  
            <div className="contentForm-wrap">
                <div className="contentForm-title">在学课程</div>
                <Table
                dataSource={onlineCourse} 
                columns={CourseTitle} 
                pagination={false} 
                bordered 
                onRow={(record) => {
                    return {
                      onClick: () => {console.log(record);window.location.href=`/class/${record.teacher_info.id}`} // 点击行
                    };
                  }} />
                <div className="contentForm-title">历史课程</div>
                <Table
                dataSource={historyCourse}
                columns={CourseTitle}
                pagination={false}
                bordered
                onRow={(record) => {
                    return {
                      onClick: () => {console.log(record);window.location.href=`/class/${record.teacher_info.id}`} // 点击行
                    };
                  }} />
            </div>
        );
    }
}
