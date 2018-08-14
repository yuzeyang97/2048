import { Button } from 'antd';
import React, { Component } from 'react';
import './HandleResult.css'
import SearchWrap from '../searchWrap/searchWrap.js'
import ButtonWrap from '../ButtonWrap/ButtonWrap.js'
export default class HandleResult extends Component {
    search = (data) => {
        const { Actions } = this.props
        Actions.filterHandleResult(data)
    }
    renderBtn = () => {
        const { entities, userConfig, Actions } = this.props
        const { person } = entities
        const { powerType, result, filterHandleResult, selectList, deleteSelectList } = userConfig
        const filterHandleResultNum = Number(filterHandleResult)
        if (filterHandleResultNum != '' && result[powerType].person.indexOf(filterHandleResultNum) != -1) {
            const person1 = {
                name: person[filterHandleResultNum].name,
                mid: person[filterHandleResultNum].mid,
                substitute: person[filterHandleResultNum].substitute,
                comment: person[filterHandleResultNum].comment,
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
            <div className='handleresult-wrap'>
                <div className='handleresult-top'>
                    <Button onClick={this.deleteperson}>删除</Button><SearchWrap search={this.search} />
                </div>
                <div className='handleresult-bottom'>
                    {this.renderBtn()}
                </div>
            </div>
        )
    }
}