// 学员档案页
import React, { Component } from 'react';
import { Table, Layout} from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import Search from '../search/search.js'
import './index.css'

const { Content } = Layout;

const CourseTitle = [{
  title: '学员名',
  dataIndex: 'nick',
  key: 'nick',
}, {
  title: '学员编号/MID',
  dataIndex: 'mid',
  key: 'mid',
  onFilter: (value, record) => { console.log(record); return record.mid == value },
}, {
  title: '入学时间',
  dataIndex: 'enter_time',
  key: 'enter_time',
}, {
  title: '开课时间',
  dataIndex: 'start_time',
  key: 'start_time',
}, {
  title: '在学课程',
  dataIndex: 'learning_lessons',
  key: 'learning_lessons',
},
{
  title: '负责老师',
  dataIndex: 'teachers',
  key: 'teachers',
}]

class StudentMessage extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    const { Actions } = this.props;
    Actions.fetchStudentList();
  }
  render() {
    const { entities, filteredValue,result } = this.props.studentList
    const {students}=entities
    const { Actions } = this.props
    CourseTitle[1].filteredValue = filteredValue

    const studentList = result.map((item, index) => {
                return {
                    key: index + 1,
                    nick: students[item].nick,
                    mid: students[item].mid,
                    enter_time: students[item].enter_time,
                    start_time: students[item].start_time,
                    learning_lessons: students[item].learning_lessons.length?students[item].learning_lessons.join(' '):'无',
                    teachers: students[item].teachers.length?students[item].teachers.join(' '):'无',
                }
            })
    return (
      <Content>
        <Search search={Actions.searchStudent} />
        <Table
          dataSource={studentList}
          columns={CourseTitle}
          pagination={false}
          bordered
          onRow={(record) => {
            return {
              onClick: () => {window.location.href=`/person/${record.mid}`} // 点击行
            };
          }}
        />
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


export default connect(mapStateToProps, mapDispatchToProps)(StudentMessage);