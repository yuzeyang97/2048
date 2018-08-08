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
        const {author,classInfo,homework,teacherInfo}=entities
        const itemSelf=homework[item]
        return (
            <div className="homeworkinfo-wrapper">
                <div className="homeworkinfo-id">No.{item}</div>
                <div className="homeworkinfo-info">
                    <Avatar shape="square" icon="user" />
                    <div className='homeworkinfo-info-text'>
                        <div><span>作业:</span><span>{itemSelf.description}</span></div>
                        <div className='homeworkinfo-info-bottom'>
                        <div className="homeworkinfo-info-item"><span>冰雪</span> {author[itemSelf.author].nick}</div>
                        <div className="homeworkinfo-info-item"><span>mid:</span><span>{author[itemSelf.author].mid}</span> </div>
                        <div className="homeworkinfo-info-item"><span>{classInfo[itemSelf.classInfo].name}|</span><span>{teacherInfo[itemSelf.teacherInfo].nick}</span> </div>
                        <div className="homeworkinfo-info-item"><span>点评人:</span><span>{itemSelf.commentator}</span> </div>
                        <div className="homeworkinfo-info-item"><span>提交时间:</span><span>{ date.toLocaleString(itemSelf.time)}</span> </div>
                        </div>
                    </div>
                </div>
                <div className="homeworkinfo-switch">佳作<Switch defaultChecked={itemSelf.isExcellent} onChange={onChange} /></div>
            </div>
        )
    }
}