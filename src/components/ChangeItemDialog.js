import React, { Component } from 'react';
import ChangeItemBtn from './ChangeItemBtn';
import CloseDialogBtn from './CloseDialogBtn';
export default class Dialog extends Component{
    render(){
        const {actions} =this.props
        return(
            <div className="dialog" >
               <CloseDialogBtn actions={actions}/>
                {this.renderChangeItemBtn()}
            </div>
        )
    }

    renderChangeItemBtn=()=>{
            const {changeItemBtn,actions}=this.props
            return changeItemBtn.map((item,idex)=>{
                return <ChangeItemBtn method={item.method} context={item.context} key={idex} actions={actions}/>
            })
        }

    
}
