import React, { Component } from 'react';
const img = require('../img/icon.png')
export default class TabBarBtn extends Component {
    render() {
        const {bgColor,title}=this.props.data
        return (
            <div className='tabBarBtn'>
                <img src={img} className='tabBtnImg' />
                <span className={bgColor}>{title}</span>
            </div>
        )
    }
}