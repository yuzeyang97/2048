import React, { Component } from 'react';
import CloseDialogBtn from './CloseDialogBtn';
import { closeDialog,addItem } from '../actions';
export default class AddItemDialog extends Component{
    constructor(props){
        super(props)
    }  

    render(){
        const {dispatch} =this.props
        return(
            <div className="dialog">
                <div className="form-wrapper">
                <CloseDialogBtn dispatch={dispatch}/>
                <div className="input-wrapper"><span className='input-title'>标题</span><input type="text" placeholder="请输入标题" ref="title"/></div>
                <div className="input-wrapper"><span className='input-title'>描述</span><input type="text" placeholder="请输入描述" ref="description"/></div>
                <div className="input-wrapper"><span className='input-title'>时间</span><input type="text" placeholder="请输入时间" ref="time"/></div>
                <button onClick={this.postMessage}>添加</button>
                </div>
            </div>
        )
    }

    postMessage=()=>{
        const {dispatch} = this.props
        const titleValue=this.refs.title.value
        const descriptionValue=this.refs.description.value
        const timeValue=this.refs.time.value
        if(titleValue&&descriptionValue&&timeValue){
            dispatch(addItem(titleValue,descriptionValue,timeValue))      
            dispatch(closeDialog())
        }
        else{
            alert('输入有误')
        }
    }
}
