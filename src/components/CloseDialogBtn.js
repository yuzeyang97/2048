import React, { Component } from 'react';
const colseImg=require("./../img/closeBtn.png");


export default class CloseDialogBtn extends Component{
    render(){
        return <div onClick={this.closeDialog} className="closeBtn"><img src={colseImg}/></div>
    }
    closeDialog=()=>{
        const {actions}=this.props
        actions.closeDialog()
    }
}