import { Button } from 'antd';
import React, { Component } from 'react';
import './HandleResult.css'
import SearchWrap from '../searchWrap/searchWrap.js'
import ButtonWrap from '../ButtonWrap/ButtonWrap.js'
export default class HandleResult extends Component {
    search=(data)=>{
        const { Actions } = this.props
        Actions.filterHandleResult(data)
    }
    renderBtn = () => {
        const { entities, userConfig, Actions } = this.props
        let { currentView, result, filterHandleResult,deleteflag } = userConfig
        const { person } = entities
        filterHandleResult=Number(filterHandleResult)
        if (filterHandleResult != '' && result[currentView].person.indexOf(filterHandleResult) != -1) {
            const person1={
                name:person[filterHandleResult].name,
                mid:person[filterHandleResult].mid,
                substitute:person[filterHandleResult].substitute,
                comment:person[filterHandleResult].comment,
            }
            return <ButtonWrap person={person1} currentView={currentView} type='result' Actions={Actions} deleteflag={deleteflag}/>
        }
        else {
            return result[currentView].person.map((item) => {
                const person1={
                    name:person[item].name,
                    mid:person[item].mid,
                    substitute:person[item].substitute,
                    comment:person[item].comment,
                }
                return <ButtonWrap person={person1} currentView={currentView} type='result' Actions={Actions} deleteflag={deleteflag}/>
            })
        }
    }
    deleteflag=()=>{
        const {Actions} = this.props
        Actions.deleteflag(true)
    }
    render() {
       
        return (
            <div className='handleresult-wrap'>
                <div className='handleresult-top'>
                    <Button onClick={this.deleteflag}>删除</Button><SearchWrap search={this.search}/>
                </div>
                <div className='handleresult-bottom'>
                    {this.renderBtn()}
                </div>
            </div>
        )
    }
}