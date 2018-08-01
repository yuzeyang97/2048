import React, { Component } from 'react';
import { Table,Layout,Input,Button} from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import BasicInfo from './BasicInfo/BasicInfo.js';
const { Content } = Layout;

 class ClassInfo extends Component {
    constructor(props) {
      super(props)
  
    }

    componentDidMount() {
      const {Actions} = this.props;
      Actions.getClassInfo();
    }

    render() {
      const { classList, CourseTitle,basicInfo,keysMap}=this.props.classInfo
      return (
        <Content>
             <BasicInfo basicInfo={basicInfo} keysMap={keysMap}/>
             <Table dataSource={classList} columns={CourseTitle} pagination={false} bordered  />
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