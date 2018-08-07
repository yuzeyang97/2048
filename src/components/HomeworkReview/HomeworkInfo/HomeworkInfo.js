import React, { Component } from 'react';
import { Switch } from 'antd';
import { Avatar } from 'antd';
import './HomeworkInfo.css'

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

const date=new Date()

export default class HomeworkInfo extends Component {
    render() {
        const { entities,item} = this.props
        return (
            <div className="homeworkinfo-wrapper">
                <div className="homeworkinfo-id">No.{item}</div>
                <div className="homeworkinfo-info">
                    <Avatar shape="square" icon="user" />
                    <div className='homeworkinfo-info-text'>
                        <div><span>作业:</span><span>{entities.reviewitem[item].description}</span></div>
                        <div className='homeworkinfo-info-bottom'>
                        <div className="homeworkinfo-info-item"><span>冰雪</span> {entities.author[entities.reviewitem[item].author].nick}</div>
                        <div className="homeworkinfo-info-item"><span>mid:</span><span>{entities.author[entities.reviewitem[item].author].mid}</span> </div>
                        <div className="homeworkinfo-info-item"><span>{entities.classInfo[entities.reviewitem[item].classInfo].name}|</span><span>{entities.teacherInfo[entities.reviewitem[item].teacherInfo].nick}</span> </div>
                        <div className="homeworkinfo-info-item"><span>点评人:</span><span>{entities.reviewitem[item].commentator}</span> </div>
                        <div className="homeworkinfo-info-item"><span>提交时间:</span><span>{ date.toLocaleString(entities.reviewitem[item].time)}</span> </div>
                        </div>
                    </div>
                </div>
                <div className="homeworkinfo-switch">佳作<Switch defaultChecked onChange={onChange} /></div>
            </div>
        )
    }
}