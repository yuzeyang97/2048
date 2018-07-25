import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        return(
            <div className="tool">
            <img src={this.props.data.img} alt="" />
            <span>{this.props.data.btnName}</span>
            </div>
        )
    }
}
