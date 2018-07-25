import React, { Component } from 'react';
import { showAddDialog,deleteMoreItem } from '../actions'
const addItemBtn=require("../img/addItemBtn.png")
const deleteItemBtn=require("../img/delete.png")

export default class HeadTitle extends Component{
    render(){
        const {title,mulflag}=this.props
        return(     
        <div className="header">
            {mulflag?<img src={deleteItemBtn} className="deleteItemBtn" onClick={this.deleteMoreItem}/>:''}
            <h1 className="bounceInDown">{title}</h1>
            <img src={addItemBtn} className="addItemBtn" onClick={this.showAddDialog}/>
        </div>
        )
    }
    showAddDialog=()=>{
        const {dispatch} =this.props
        dispatch(showAddDialog())
    }
    deleteMoreItem=()=>{
        const {dispatch} =this.props
        dispatch(deleteMoreItem())
    }
}


