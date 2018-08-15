
import React, { Component } from 'react';
import './ConfigContent.css'
import PowerBtnView from '../PowerBtnView/PowerBtnView.js'
import EmployeeBtnView from '../EmployeeBtnView/EmployeeBtnView.js'
import DepartmentTree from '../DepartmentTree/DepartmentTree.js'
import { Button } from 'antd';
export default class ConfigContent extends Component {
    addperson=()=>{
        const {Actions,entities,userConfig}=this.props
        const { powerType ,selectList} = userConfig
        const data={
            powerType,
            selectList
        }
        Actions.filterEmployeeBtnView('')
        Actions.filterPowerBtnView('')
        Actions.addperson(data)
    }
    closeConfig=()=>{
        const {Actions}=this.props;
        Actions.showConfig(false)
    }
    render() {
        const { entities, userConfig, Actions } = this.props
        const { powerType, result } = userConfig
        return (
            <div className='configcontent-wrap'>
                <div className='configcontent-head'>
                    <div>
                        {result[powerType].title}:{result[powerType].description}
                    </div>
                    <div onClick={this.closeConfig} className='closeCofig-btn'>
                        X
                    </div>
                </div>
                <div className='configcontent-content'>
                    <PowerBtnView entities={entities} userConfig={userConfig} Actions={Actions}/>
                    <DepartmentTree entities={entities} userConfig={userConfig} Actions={Actions}/>
                    <EmployeeBtnView entities={entities} userConfig={userConfig} Actions={Actions}/>
                </div>
                <div className='configcontent-foot'>
                    <Button onClick={this.addperson}>确认</Button>
                </div>
            </div>
        )
    }
}