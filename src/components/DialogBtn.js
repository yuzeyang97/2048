import React, { Component } from 'react';

export default class DialogBtn extends Component{
    constructor(props){
        super(props)
    }

    showContent=(e)=>{
        console.log(this.props.btnNamee)
        e.stopPropagation();
    }

    render(){
        return(
            <button onClick={this.showContent} className="dialogBtn">{this.props.btnNamee}</button>
        )
    }
}