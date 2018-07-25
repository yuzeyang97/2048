import React, { Component } from 'react';
import ChangeItemBtn from './ChangeItemBtn';
import CloseDialogBtn from './CloseDialogBtn';
import {showChangeDialog} from '../actions'
const colseImg=require("./../img/closeBtn.png");
export default class Dialog extends Component{
    render(){
        const {dispatch} =this.props
        return(
            <div className="dialog" >
               <CloseDialogBtn dispatch={dispatch}/>
                {this.renderChangeItemBtn()}
            </div>
        )
    }

    renderChangeItemBtn=()=>{
            const {changeItemBtn,dispatch}=this.props
            return changeItemBtn.map((item,idex)=>{
                return <ChangeItemBtn method={item.method} context={item.context} key={idex} dispatch={dispatch}/>
            })
        }

    
}
