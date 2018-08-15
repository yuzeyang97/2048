import { Button } from 'antd';
import React, { Component } from 'react';
import './EmployeeBtnView.css';
import SearchWrap from'../searchWrap/searchWrap.js'
import ButtonWrap from '../ButtonWrap/ButtonWrap.js'
export default class EmployeeBtnView extends Component {
    search=(data)=>{
        const { Actions } = this.props
        Actions.filterEmployeeBtnView(data)
    }
    renderBtn = () => {
        const { entities, userConfig,Actions } = this.props
        const { currentSelect, filterEmployeeBtnView,powerType,selectList,deleteSelectList } = userConfig
        const {person,bloc} =entities
        const filterEmployeeBtnViewNum = Number(filterEmployeeBtnView)
        if (filterEmployeeBtnViewNum != '' && bloc[currentSelect].person.indexOf(filterEmployeeBtnViewNum) != -1) {
            const person1={
                name:person[filterEmployeeBtnViewNum].name,
                mid:person[filterEmployeeBtnViewNum].mid,
                substitute:person[filterEmployeeBtnViewNum].substitute,
                comment:person[filterEmployeeBtnViewNum].comment,
            }
            return <ButtonWrap 
            person={person1} 
            powerType={powerType} 
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
                powerType={powerType} 
                Actions={Actions}
                selectList={selectList}
            deleteSelectList={deleteSelectList}/>
            })
        }
        }
    }
    render() {
        return (
            <div className='employeebtnview-wrap'>
                <div className='employeebtnview-top'>
                   <SearchWrap search={this.search}/>
                </div>

                <div className='employeebtnview-bottom'>
                   {this.renderBtn()}
                </div>
            </div>
        )
    }
}