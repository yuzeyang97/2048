import { List } from 'antd';
import ConfigItem from '../ConfigItem/ConfigItem.js'
import React, { Component } from 'react';
import './ConfigList.css'

export default class ConfigList extends Component {
    render() {
        const {entities,userConfig,Actions}=this.props
        let {result}=userConfig
        result=Object.keys(result).map((item)=>{
            return result[item]
        })
        return (
            <div className="configlist-wrapper">
                <List
                    dataSource={result}
                    renderItem={item => (<ConfigItem  item={item} Actions={Actions}/>)}
                />
            </div>
        )
    }
}