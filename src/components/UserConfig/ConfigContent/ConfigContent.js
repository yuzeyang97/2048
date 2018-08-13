
import React, { Component } from 'react';
import './ConfigContent.css'
import HandleResult from '../HandleResult/HandleResult.js'
import HandleLoad from '../HandleLoad/HandleLoad.js'
import HandleTree from '../HandleTree/HandleTree.js'
import { Button } from 'antd';
export default class ConfigContent extends Component {
    addperson=()=>{
        const {Actions,entities,userConfig}=this.props
        const { currentView ,selectList} = userConfig
        const data={
            currentView,
            selectList
        }
        Actions.addperson(data)
    }
    render() {
        const { entities, userConfig, Actions } = this.props
        const { currentView, result } = userConfig
        return (
            <div className='configcontent-wrap'>
                <div className='configcontent-head'>
                    <div>
                        {result[currentView].title}:{result[currentView].description}
                    </div>
                </div>
                <div className='configcontent-content'>
                    <HandleResult entities={entities} userConfig={userConfig} Actions={Actions}/>
                    <HandleTree entities={entities} userConfig={userConfig} Actions={Actions}/>
                    <HandleLoad entities={entities} userConfig={userConfig} Actions={Actions}/>
                </div>
                <div className='configcontent-foot'>
                    <Button onClick={this.addperson}>确认</Button>
                </div>
            </div>
        )
    }
}