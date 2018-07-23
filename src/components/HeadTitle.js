import React, { Component } from 'react';
const addItemBtn=require("../img/addItemBtn.png")
const deleteItemBtn=require("../img/delete.png")
export default class HeadTitle extends Component{
    render(){
        const {showAddDialog,title,deleteMoreItem,mulflag}=this.props
        return(
        <div className="header">
            {mulflag?<img src={deleteItemBtn} className="deleteItemBtn" onClick={deleteMoreItem}/>:''}
            <h1 className="bounceInDown">{title}</h1>
            <img src={addItemBtn} className="addItemBtn" onClick={showAddDialog}/>
        </div>
        )
    }
}


