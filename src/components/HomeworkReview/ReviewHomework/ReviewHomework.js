import { Input, Button } from 'antd';
import React, { Component } from 'react';
import './ReviewHomework.css'
const { TextArea } = Input;

export default class ReviewHomework extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    changeValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handle = () => {
        const text = this.state.inputValue
        var timestamp = (new Date()).valueOf();
        if (!text) {
            alert('输入有误')
            return
        }
        const { entities, item, belong, Actions } = this.props
        const data = {
            text,
            item,
            belong,
            timestamp
        }
        Actions.reviewHomework(data);
        this.setState({
            inputValue: ''
        })
    }
    render() {
        return (
            <div className='reviewhomework-wrap'>
                <TextArea placeholder="请输入点评文字" onChange={this.changeValue} autosize value={this.state.inputValue} />
                <Button type="primary" onClick={this.handle}>发送</Button>
            </div>
        )
    }
}
