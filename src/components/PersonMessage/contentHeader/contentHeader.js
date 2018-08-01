import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';
import './contentHeader.css'
import Item from 'antd/lib/list/Item';
export default class ContentWrap extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { userInfo, keysMap } = this.props
        console.log(userInfo)
        console.log(keysMap)
        return (
            <div className="contentHeader-wrap">
                <div className="user-icon">
                    <Avatar src={userInfo.hurl} shape="square" />
                </div>
                <div className="contentHeader-content">
                    <div className='user-title'>{userInfo.nick}</div>
                    <div className="contentHeader-content_message">
                        <div className="contentHeader-content_message1">
                            <div><span>{keysMap.mid}:</span>MID330900002</div>
                            <div><span>{keysMap.learningLesson}:</span>{userInfo.learningLesson}</div>
                            <div><span>{keysMap.enterDate}:</span>{userInfo.enterDate}</div>
                        </div>
                        <div className="contentHeader-content_message1">
                            <div><span>{keysMap.history_pay}:</span>{userInfo.history_pay}</div>
                            <div><span>{keysMap.totalLearningDays}:</span>{userInfo.totalLearningDays}</div>
                            <div><span>{keysMap.lastLoginDate}:</span>{userInfo.lastLoginDate}</div>
                        </div>
                        <div className="contentHeader-content_message1">
                            <div><span>{keysMap.tel}:</span>{userInfo.tel}<Icon type="file-text" className="parse-icon" /></div>
                            <div className="input-wrap"><span>{keysMap.weiChatCode}:</span><input placeholder={userInfo.weiChatCode} /><button>提交</button></div>
                            <div className="input-wrap"><span id="beizhu">{keysMap.remark}:</span><input placeholder={userInfo.remark} /><button>提交</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}