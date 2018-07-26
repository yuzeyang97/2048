import React, { Component } from 'react';
export default class ChangeItemBtn extends Component{
        render(){
            const {context}=this.props
            return <button  className="dialogBtn" onClick={this.methods}>{context}</button>
        }

         methods=()=>{
            const {actions,method}=this.props;
            const fun=actions[method];
            fun()
            actions.closeDialog()
         }
}

