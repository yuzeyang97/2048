import React, { Component } from 'react';
import {closeDialog} from '../actions';
const colseImg=require("./../img/closeBtn.png");


export default class CloseDialogBtn extends Component{
    render(){
        return <div onClick={this.closeDialog} className="closeBtn"><img src={colseImg}/></div>
    }
    closeDialog=()=>{
        const {dispatch}=this.props
        dispatch(closeDialog())
    }
}