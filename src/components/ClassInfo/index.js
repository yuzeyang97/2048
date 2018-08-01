import React, { Component } from 'react';
import { Table, Layout, Icon } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import BasicInfo from './BasicInfo/BasicInfo.js';
const { Content } = Layout;
const CourseTitle = [{
  title: '课程内容',
  dataIndex: 'course_name',
  key: 'course_name',
}, {
  title: '上课时间',
  dataIndex: 'time',
  key: 'time'
}, {
  title: '上课情况',
  dataIndex: 'enter_status',
  key: 'enter_status',
  render: (text) => {
    return (text ? <span><Icon type="check-square" className='green-icon' /></span> : <span><Icon type="close" className="red-icon" /></span>)
  }
}, {
  title: '作业提交情况',
  dataIndex: 'homework_status',
  key: 'homework_status',
  render: (text) => {
    return (text ? <span><Icon type="check-square" className='green-icon' /></span> : <span><Icon type="close" className="red-icon" /></span>)
  }
}, {
  title: '被点评情况',
  dataIndex: 'review_status',
  key: 'review_status',
  render: (text) => {
    if (text == 0)
      return <span><Icon type="close" className="red-icon" /></span>
    if (text == 1)
      return <span><Icon type="check-square" className='green-icon' /></span>
    else
      return <span><Icon type="minus" /></span>
  }
},
{
  title: '打卡情况',
  dataIndex: 'clockin_status',
  key: 'clockin_status',
  render: (text) => {
    return (text ? <span><Icon type="check-square" className='green-icon' /></span> : <span><Icon type="close" className="red-icon" /></span>)
  }
},
{
  title: '满意度评分',
  dataIndex: 'satisfied_score',
  key: 'satisfied_score',
},
]
class ClassInfo extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const { Actions } = this.props;
    Actions.getClassInfo();
  }

  render() {
    const { classList,basicInfo, keysMap } = this.props.classInfo
    return (
      <Content>
        <BasicInfo basicInfo={basicInfo} keysMap={keysMap} />
        <Table dataSource={classList} columns={CourseTitle} pagination={false} bordered />
      </Content>
    );
  }
}

function mapStateToProps(state) {
  const props = { ...state };
  return props;
}

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClassInfo);