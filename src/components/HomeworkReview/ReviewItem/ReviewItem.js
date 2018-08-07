import { Button } from 'antd';
import React, { Component } from 'react';
import './ReviewItem.css'
const date = new Date()
export default class ReviewItem extends Component {
    render() {
        const { entities, item } = this.props
        const { comments } = entities
        return (
            <div className="reviewitem-wrapper">
                <div className="reviewitem-top">
                    <div className="reviewitem-left">
                        <div>{comments[item].nick}{comments[item].commentator ? <span>({comments[item].commentator.role}:{comments[item].commentator.nick})</span> : ''}</div>
                        <div>{comments[item].content}</div>
                    </div>
                    <div className="reviewitem-right">
                        <div>{date.toLocaleString(comments[item].time)}</div>
                        <div>{comments[item].commentator ? '' : <Button>退回</Button>}</div>
                    </div>
                </div>
                <div className="reviewitem-reject">{comments[item].commentator ? comments[item].reason : ''}</div>
            </div>
        )
    }
}