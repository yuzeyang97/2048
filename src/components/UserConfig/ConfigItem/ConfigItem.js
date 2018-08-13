import { Button } from 'antd';
import React, { Component } from 'react';
import './ConfigItem.css'
export default class ConfigItem extends Component {
    changeCurrentView=()=>{
        const {Actions,item}=this.props
        Actions.filterHandleResult('')
        Actions.filterHandleLoad('')
        Actions.showConfig(true)
        Actions.deleteflag(false)
        Actions.changeCurrentView(item.type)
    }
    render() {
        const {  item } = this.props
        return (
            <div className='configitem-wrap'>
                <div className='configitem-left'>
                    <span>{item.title}:</span>   <span>{item.description}</span>
                </div>

                <div className='configitem-right'>
                    <Button onClick={this.changeCurrentView}>权限管理</Button>
                </div>
            </div>
        )
    }
}