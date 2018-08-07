import { Input, Button  } from 'antd';
import React, { Component } from 'react';
import './ReviewHomework.css'
const { TextArea } = Input;

export default class ReviewHomework extends Component {
    render() {
        return (
            <div className='reviewhomework-wrap'>
                <TextArea placeholder="Autosize height based on content lines" autosize />
                <Button type="primary">发送</Button>
            </div>
        )
    }
}