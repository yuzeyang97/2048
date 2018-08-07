import { List } from 'antd';
import ReviewItem from '../ReviewItem/ReviewItem.js'
import React, { Component } from 'react';
import './ReviewList.css'

export default class ReviewList extends Component {
    render() {
        const { entities,item} = this.props
        const data = entities.homework[item].comments
        return (
            <div className="reviewlist-wrapper">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (<ReviewItem  entities={entities} item={item}/>)}
                />
            </div>
        )
    }
}