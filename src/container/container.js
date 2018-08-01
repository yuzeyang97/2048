import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header/Header.js'
import Slider from '../components/Slider/Slider.js'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js'
import Content from '../components/content/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';



class Container extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {Actions} = this.props;
    const mid='MID330900002';
    console.log(Actions)
    Actions.fetchUserInfo(mid);
    Actions.fetchLessonInfo(mid);
  }
  render() {
    const { userInfo, keysMap } = this.props.userInfo
    const { onlineCourse, CourseTitle, historyCourse } = this.props.LessonInfo
    return (
      <Layout>
        <Header />
        <Layout>
          <Slider />
          <Layout>
            <Breadcrumb />
            <Content
              userInfo={userInfo}
              keysMap={keysMap}
              onlineCourse={onlineCourse}
              CourseTitle={CourseTitle}
              historyCourse={historyCourse}
            />
          </Layout>
        </Layout>
      </Layout>
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


export default connect(mapStateToProps, mapDispatchToProps)(Container);
