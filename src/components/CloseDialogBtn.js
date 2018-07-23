import React, { Component } from 'react';
const colseImg=require("./../img/closeBtn.png");

export default class CloseDialogBtn extends Component{
    render(){
        return <div onClick={this.props.showDialog} className="closeBtn"><img src={colseImg}/></div>
    }
}