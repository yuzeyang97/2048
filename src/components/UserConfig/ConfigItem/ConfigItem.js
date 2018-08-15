import { Button } from 'antd';
import React, { Component } from 'react';
import './ConfigItem.css'
export default class ConfigItem extends Component {
    changePowerType=()=>{
        const {Actions,item}=this.props
        Actions.filterPowerBtnView('')
        Actions.filterEmployeeBtnView('')
        Actions.showConfig(true)
        Actions.changePowerType(item.type)
    }
    render() {
        const {  item } = this.props
        return (
            <div className='configitem-wrap'>
                <div className='configitem-left'>
                    <span>{item.title}:</span>   <span>{item.description}</span>
                </div>

                <div className='configitem-right'>
                    <Button onClick={this.changePowerType}>权限管理</Button>
                </div>
            </div>
        )
    }
}