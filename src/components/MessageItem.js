import React, { Component } from 'react';
const a=require("../img/1.jpg")
export default class Tools extends Component{
    render(){
        return(
            <div className="item-wrap" onClick={this.props.showDialog}>
                <div className="item-left">
                    <img src={this.props.data.img} alt="小年糕" className="item-img"/>
                    <ul className="item-message">
                        <li className="h1">{this.props.data.title}</li>
                        <li className="description">{this.props.data.description}</li>
                    </ul>
                </div>
                <div className="item-right">
                {this.props.data.time}
                </div>
            </div>
        )
    }
}


