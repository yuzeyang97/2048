import { List } from 'antd';
import HomeworkContent from '../HomeworkContent/HomeworkContent.js'
import React, { Component } from 'react';
import './HomeworkList.css'

export default class HomeworkList extends Component {
    render() {
        const { entities, homework,belong,Actions,nowView } = this.props
        let data = homework[belong]
        if(belong==nowView){
            if(homework.filterMid){
                if(data.indexOf(homework.filterMid)!=-1)
                data=[homework.filterMid]
                else{
                    alert('没有匹配到所指mid 请重新输入')
                }
            }
        }
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