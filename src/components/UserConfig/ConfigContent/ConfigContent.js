
import React, { Component } from 'react';
import './ConfigContent.css'
import HandleResult from '../HandleResult/HandleResult.js'
import HandleLoad from '../HandleLoad/HandleLoad.js'
import HandleTree from '../HandleTree/HandleTree.js'
import { Button } from 'antd';
export default class ConfigContent extends Component {
    showConfig=()=>{
        const {Actions}=this.props
        Actions.showConfig(false)
    }
    deleteflag=()=>{
        const {Actions}=this.props
        Actions.deleteflag(false)
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
                    <div onClick={this.showConfig} className='closeconfig-btn'>X</div>
                </div>
                <div className='configcontent-content'>
                    <HandleResult entities={entities} userConfig={userConfig} Actions={Actions}/>
                    <HandleTree entities={entities} userConfig={userConfig} Actions={Actions}/>
                    <HandleLoad entities={entities} userConfig={userConfig} Actions={Actions}/>
                </div>
                <div className='configcontent-foot'>
                    <Button onClick={this.deleteflag}>确认</Button>
                </div>
            </div>
        )
    }
}