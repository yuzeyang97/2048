import React, { Component } from 'react';
import { Layout} from 'antd';
import ContentHeader from './contentHeader/contentHeader.js';
import ContentTabWrap from './contentTabWrap.js';

const { Content } = Layout;

export default class ContentWrap extends Component {
    constructor(props) {
      super(props)
  
    }
    render() {
      const {userInfo, keysMap} =this.props
      const { onlineCourse, CourseTitle, historyCourse }=this.props
      return (
        <Content>
            <ContentHeader  userInfo={userInfo}  keysMap={ keysMap} />
            <ContentTabWrap
             onlineCourse={onlineCourse}
             CourseTitle={CourseTitle}
             historyCourse={historyCourse} />
        </Content>
      );
    }
  }