import React, { Component } from 'react';
import './popover.css'
const keysMap={
    nick:'老师账号',
    id:'ID',
    wxCode: '微信',
    realName: '对应员工',
    mid: 'ID',
    wx: '微信'
}
const stopPropagation=(e)=>{
    e.stopPropagation()
}
export default class Popover extends Component {
    
    renderPopover() {
        const { flag, msg } = this.props.popover
        if (flag)
            return (
                <div className='popover-wrap' onClick={stopPropagation} >
                    {Object.keys(msg).map((item) => {
                        return (
                            <div className="popover-item">
                                <span className="popover-item-title">{keysMap[item]}:</span>
                                <span>{msg[item]}</span>
                            </div>)
                    })
                    }
                </div>
            )
    }
    render() {
        return (
            <div>
                {this.renderPopover()}
            </div>
        )
    }
}