import { Button } from 'antd';
import React, { Component } from 'react';
import './ButtonWrap.css';
export default class ButtonWrap extends Component {
    onClick=()=>{
        const {person,currentView,type,Actions}=this.props
        if(type!='result'){
            const data={
                type:currentView,
                id:person.mid
            }
            Actions.addperson(data)
        }
    }
    deleteperson=()=>{
        const {person,currentView,type,Actions}=this.props
        if(type=='result'){
            const data={
                type:currentView,
                id:person.mid
            }
            Actions.deleteperson(data)
        }
    }
    render() {
        const {person,currentView,type,deleteflag}=this.props
        console.log(deleteflag,22222222222222)
        return (
            <div className='buttonwrap' onClick={this.onClick}>
                <Button disabled={person[currentView]==1&&type!='result'}><span>{person.name}</span> mid: {person.mid}</Button>
                {deleteflag&&type=='result'?<div className='deletebtn' onClick={this.deleteperson}>X</div>:''}
            </div>
        )
    }
}