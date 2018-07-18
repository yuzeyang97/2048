import React, { Component } from 'react';
import DialogBtn from './DialogBtn.js';
export default class Dialog extends Component{
    constructor(props){
        super(props)
        this.state = {
            btnList:this.props.data
        }
    }

    render(){
        return(
            <div className="dialog" onClick={this.props.showDialog}>
                {this.state.btnList.map((item,idex)=>{
                    return <DialogBtn btnNamee={item.btnName} key={idex}></DialogBtn>
                })}
            </div>
        )
    }
}
