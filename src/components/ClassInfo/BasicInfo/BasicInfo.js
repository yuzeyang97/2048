import React, { Component } from 'react';
import './basicInfo.css'

export default class BasicInfo extends Component {
    render(){
        const {keysMap,basicInfo}=this.props
        return(
            <div className='basic-info'>
                {Object.keys(basicInfo).map((item,index)=>{
                    return <span key={index}>{keysMap[item]}:{basicInfo[item]}</span>
                })}
            </div>
        )
    }
}