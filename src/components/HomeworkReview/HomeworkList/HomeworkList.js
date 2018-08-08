import { List } from 'antd';
import HomeworkContent from '../HomeworkContent/HomeworkContent.js'
import React, { Component } from 'react';
import './HomeworkList.css'

export default class HomeworkList extends Component {
    render() {
        const { entities, homework,belong,Actions } = this.props
        const data = homework[belong]
        return (
            <div className="homeworklist-wrapper">
                <List
                    bordered
                    dataSource={data}
                    renderItem={(item,idex) => {
                        return (<HomeworkContent entities={entities} item={item} idex={idex} belong={belong} Actions={Actions}/>)}}
                />
            </div>
        )
    }
}