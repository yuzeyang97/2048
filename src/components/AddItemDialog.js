import React, { Component } from 'react';
const colseImg=require("./../img/closeBtn.png");
export default class AddItemDialog extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="dialog">
                <div className="form-wrapper">
                <div onClick={this.props.showDialog} className="closeBtn"><img src={colseImg}/></div>
                <div className="input-wrapper"><span>标题</span><input type="text" placeholder="请输入标题" ref="title"/></div>
                <div className="input-wrapper"><span>描述</span><input type="text" placeholder="请输入描述" ref="description"/></div>
                <div className="input-wrapper"><span>时间</span><input type="text" placeholder="请输入时间" ref="time"/></div>
                <button onClick={this.postMessage}>添加</button>
                </div>
            </div>
        )
    }

    postMessage=()=>{
        const titleValue=this.refs.title.value
        const descriptionValue=this.refs.description.value
        const timeValue=this.refs.time.value
        if(titleValue&&descriptionValue&&timeValue){
            this.props.addItem(titleValue,descriptionValue,timeValue)
            this.props.showDialog()
        }
        else{
            alert('输入有误')
        }
    }
}
