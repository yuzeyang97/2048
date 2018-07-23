import React, { Component } from 'react';

export default class ChangeItemBtn extends Component{
        render(){
            const {method,context}=this.props
            return <button  className="dialogBtn" onClick={method}>{context}</button>
        }
}

