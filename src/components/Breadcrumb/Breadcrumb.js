import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import './Breadcrumb.css'

export default class Header extends Component {
    render() {
        return (
            <Breadcrumb separator=">">
                <Breadcrumb.Item>摄影训练营</Breadcrumb.Item>
                <Breadcrumb.Item href="">学员档案</Breadcrumb.Item>
                <Breadcrumb.Item href="">个人档案</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}



