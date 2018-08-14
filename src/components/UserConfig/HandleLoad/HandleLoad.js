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
        const { currentSelect, filterHandleLoad,currentView,selectList,deleteSelectList } = userConfig
        const {person,bloc} =entities
        const filterHandleLoadNum = Number(filterHandleLoad)
        if (filterHandleLoadNum != '' && bloc[currentSelect].person.indexOf(filterHandleLoadNum) != -1) {
            const person1={
                name:person[filterHandleLoadNum].name,
                mid:person[filterHandleLoadNum].mid,
                substitute:person[filterHandleLoadNum].substitute,
                comment:person[filterHandleLoadNum].comment,
            }
            return <ButtonWrap 
            person={person1} 
            currentView={currentView} 
            Actions={Actions} 
            selectList={selectList}
            deleteSelectList={deleteSelectList}/>
        }
        else {
            if(bloc[currentSelect]){
            if(bloc[currentSelect].person)
            return bloc[currentSelect].person.map((item) => {
                const person1={
                    name:person[item].name,
                    mid:person[item].mid,
                    substitute:person[item].substitute,
                comment:person[item].comment,
                }
                return <ButtonWrap 
                person={person1} 
                currentView={currentView} 
                Actions={Actions}
                selectList={selectList}
            deleteSelectList={deleteSelectList}/>
            })
        }
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