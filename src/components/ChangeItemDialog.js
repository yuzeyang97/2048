import React, { Component } from 'react';
const colseImg=require("./../img/closeBtn.png");
export default class Dialog extends Component{
    constructor(props){
        super(props)
        this.state = {
            btnList:this.props.data
        }
    }

    render(){
        return(
            <div className="dialog" >
                <div className="closeBtn" onClick={this.props.showDialog}><img src={colseImg}/></div>
                <button onClick={this.showContent} className="dialogBtn" onClick={this.props.topItem}>置顶</button>
                <button onClick={this.showContent} className="dialogBtn" onClick={this.props.deleteItem}>删除</button>
                <button onClick={this.showContent} className="dialogBtn"  onClick={this.props.showMulSelect}>多选删除</button>
            </div>
        )
    }
}
