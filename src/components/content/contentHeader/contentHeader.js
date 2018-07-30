import React, { Component } from 'react';
import { Avatar } from 'antd';
import { Input } from 'antd';
import './contentHeader.css'
import Item from 'antd/lib/list/Item';
export default class ContentWrap extends Component {
    constructor(props) {
      super(props)
  
    }
    render() {
        const {userInfo, keysMap} =this.props
        console.log(userInfo)
        const userInfoList1=Object.keys(userInfo.detailed1)
        const userInfoList2=Object.keys(userInfo.detailed2)
      return (
        <div className="contentHeader-wrap">  
            <div className="user-icon">
                <Avatar src={userInfo.usericon} shape="square" />
            </div>
            <div className="contentHeader-content">
                <div  className='user-title'>{userInfo.username}</div>
                <div className="contentHeader-content_message">
                    <div className="contentHeader-content_message1">
                    {userInfoList1.map((item,idex)=>{
                        return <div><span>{keysMap[item]}:</span>{userInfo.detailed1[item]}</div>
                    })}
                    </div>
                    <div className="contentHeader-content_message1">
                    {userInfoList2.map((item,idex)=>{
                        return <div><span>{keysMap[item]}:</span>{userInfo.detailed2[item]}</div>
                    })}
                    </div>
                    <div className="contentHeader-content_message1">
                        <div><span>{keysMap.telephone}</span>{userInfo.telephone}</div>
                        <div className="input-wrap"><span>{keysMap.wechat}</span><input/><button>提交</button></div>
                        <div className="input-wrap"><span id="beizhu">{keysMap.remarks}</span><input/><button>提交</button></div>
                    </div>
                </div>
            </div>
        </div>
      );   
    }
  }