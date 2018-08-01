import React, { Component } from 'react';
import { Table,Layout,Input,Button} from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import Search from './search/search.js'
import './index.css'

const { Content } = Layout;

 class StudentMessage extends Component {
    constructor(props) {
      super(props)
  
    }
    componentDidMount() {
      const {Actions} = this.props;
      Actions.fetchStudentList();
    }
    render() {
      const { studentList, CourseTitle}=this.props.studentList
      const {Actions}=this.props
      return (
        <Content>
             <Search search={Actions.searchStudent} />
             <Table dataSource={studentList} columns={CourseTitle} pagination={false} bordered  />
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