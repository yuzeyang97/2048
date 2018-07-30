import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header/Header.js'
import Slider from '../components/Slider/Slider.js'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js'
import Content from '../components/content/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as action from '../actions';


class Container extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { userInfo, keysMap } = this.props
    const { onlineCourse, CourseTitle, historyCourse }=this.props
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


export default connect(mapStateToProps)(Container);
