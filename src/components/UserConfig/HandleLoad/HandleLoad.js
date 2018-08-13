import { Button } from 'antd';
import React, { Component } from 'react';
import './HandleLoad.css';
import SearchWrap from'../searchWrap/searchWrap.js'
import ButtonWrap from '../ButtonWrap/ButtonWrap.js'
export default class HandleLoad extends Component {
    search=(data)=>{
        const { Actions } = this.props
        Actions.filterHandleLoad(data)
    }
    renderBtn = () => {
        const { entities, userConfig,Actions } = this.props
        let { currentSelect, filterHandleLoad,currentView } = userConfig
        const { person,group } = entities
        filterHandleLoad=Number(filterHandleLoad)
        if (filterHandleLoad != '' && group[currentSelect].person.indexOf(filterHandleLoad) != -1) {
            const person1={
                name:person[filterHandleLoad].name,
                mid:person[filterHandleLoad].mid,
                substitute:person[filterHandleLoad].substitute,
                comment:person[filterHandleLoad].comment,
            }
            return <ButtonWrap person={person1} currentView={currentView} Actions={Actions}/>
        }
        else {
            if(group[currentSelect])
            return group[currentSelect].person.map((item) => {
                const person1={
                    name:person[item].name,
                    mid:person[item].mid,
                    substitute:person[item].substitute,
                comment:person[item].comment,
                }
                return <ButtonWrap person={person1} currentView={currentView} Actions={Actions}/>
            })
        }
    }
    render() {
        return (
            <div className='handleload-wrap'>
                <div className='handleload-top'>
                   <SearchWrap search={this.search}/>
                </div>

                <div className='handleload-bottom'>
                   {this.renderBtn()}
                </div>
            </div>
        )
    }
}