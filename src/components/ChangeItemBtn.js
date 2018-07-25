import React, { Component } from 'react';
import * as action from '../actions'
export default class ChangeItemBtn extends Component{
        render(){
            const {context}=this.props
            return <button  className="dialogBtn" onClick={this.methods}>{context}</button>
        }

         methods=()=>{
            const {dispatch,method}=this.props;
            const fun=action[method];
            dispatch(fun())
            const closeDialog=action.closeDialog
            dispatch(closeDialog())
         }
}

