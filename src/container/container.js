import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header/Header.js'
import Slider from '../components/Slider/Slider.js'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js'
import Content from '../components/content/index.js'
import { connect } from 'react-redux'
import * as api from '../api'



class Container extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const mid='MID330900002';
    api.fetchUserInfo( mid,dispatch);
    api.fetchLessonInfo( mid,dispatch);
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

function mapDispatchToProps(dispatch) {
  return { dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
