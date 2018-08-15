import { Button } from 'antd';
import React, { Component } from 'react';
import './PowerBtnView.css'
import SearchWrap from '../searchWrap/searchWrap.js'
import ButtonWrap from '../ButtonWrap/ButtonWrap.js'
export default class PowerBtnView extends Component {
    search = (data) => {
        const { Actions } = this.props
        Actions.filterPowerBtnView(data)
    }
    renderBtn = () => {
        const { entities, userConfig, Actions } = this.props
        const { person } = entities
        const { powerType, result, filterPowerBtnView, selectList, deleteSelectList } = userConfig
        const filterPowerBtnViewNum = Number(filterPowerBtnView)
        if (filterPowerBtnViewNum != '' && result[powerType].person.indexOf(filterPowerBtnViewNum) != -1) {
            const person1 = {
                name: person[filterPowerBtnViewNum].name,
                mid: person[filterPowerBtnViewNum].mid,
                substitute: person[filterPowerBtnViewNum].substitute,
                comment: person[filterPowerBtnViewNum].comment,
            }
            return <ButtonWrap
                person={person1}
                powerType={powerType}
                type='result'
                Actions={Actions}
                selectList={selectList}
                deleteSelectList={deleteSelectList} />
        }
        else {
            return result[powerType].person.map((item) => {
                const person1 = {
                    name: person[item].name,
                    mid: person[item].mid,
                    substitute: person[item].substitute,
                    comment: person[item].comment,
                }
                return <ButtonWrap
                    person={person1}
                    powerType={powerType}
                    type='result'
                    Actions={Actions}
                    selectList={selectList}
                    deleteSelectList={deleteSelectList} />
            })
        }
    }
    deleteperson = () => {
        const { Actions, entities, userConfig } = this.props
        const { powerType, deleteSelectList } = userConfig
        const data = {
            powerType,
            deleteSelectList
        }
        Actions.deleteperson(data)
    }
    render() {

        return (
            <div className='powerbtnview-wrap'>
                <div className='powerbtnview-top'>
                    <Button onClick={this.deleteperson}>删除</Button><SearchWrap search={this.search} />
                </div>
                <div className='powerbtnview-bottom'>
                    {this.renderBtn()}
                </div>
            </div>
        )
    }
}