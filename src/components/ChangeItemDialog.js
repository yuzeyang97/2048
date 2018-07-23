import React, { Component } from 'react';
import ChangeItemBtn from './ChangeItemBtn';
import CloseDialogBtn from './CloseDialogBtn';
const colseImg=require("./../img/closeBtn.png");
export default class Dialog extends Component{
    render(){
        return(
            <div className="dialog" >
               <CloseDialogBtn showDialog={this.props.showDialog}/>
                {this.renderChangeItemBtn()}
            </div>
        )
    }

    renderChangeItemBtn=()=>{
            return this.props.changeItemBtn.map((item,idex)=>{
                return <ChangeItemBtn method={item.method} context={item.context} key={idex}/>
            })
        }
}
