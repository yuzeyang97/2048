import React, { Component } from 'react';
import {Breadcrumb,Button } from 'antd';
import { Link} from 'react-router'
import './Breadcrumb.css'
export default class Header extends Component {
    render() {
        const {router}=this.props
        const {goBack} = router
        return (
            <div className='breadcrumb-wrap'>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>摄影训练营</Breadcrumb.Item>
                <Breadcrumb.Item><Link to={'/'}>学员档案</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={'/person/default'}>个人档案</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={'/class/default'}>上课详情</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Button className='back-btn' onClick={goBack}>返回</Button>
            </div>
        )
    }
}



