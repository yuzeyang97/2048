import React, { Component } from 'react';
const img =require('../img/check.jpg')
export default class ColorBtn extends Component{
    topItem=()=>{
        const itemidex=this.props.itemIdex
        const idex=this.props.currentIdex
        const type=this.props.type
        this.props.topItem(itemidex,idex,type)
    }
    render(){
        return(
        <div className={this.props.bgColor} onClick={this.topItem}>
            {this.props.currentIdex==0?<img src={img} className='checkImg'/>:''}
        </div>
        )
    }
}