import { Button } from 'antd';
import React, { Component } from 'react';
import './ReviewItem.css'
const date = new Date()
export default class ReviewItem extends Component {
    reviewReject=()=>{
        const {  item,Actions } = this.props
        Actions.reviewReject(item)
    }
    render() {
        const { entities, item } = this.props
        const { comments } = entities
        const itemSelf=comments[item]
        return (
            <div className="reviewitem-wrapper">
                <div className="reviewitem-top">
                    <div className="reviewitem-left">
                        <div>{itemSelf.nick}{itemSelf.commentator ? <span>({itemSelf.commentator.role}:{itemSelf.commentator.nick})</span> : ''}</div>
                        <div>{itemSelf.content}</div>
                    </div>
                    <div className="reviewitem-right">
                        <div>{date.toLocaleString(itemSelf.time)}</div>
                        <div>{itemSelf.status=="unrevised" ? <Button onClick={this.reviewReject}>退回</Button>:''}</div>
                    </div>
                </div>
                <div className="reviewitem-reject">{itemSelf.status=="reject" ? itemSelf.reason : ''}</div>
            </div>
        )
    }
}