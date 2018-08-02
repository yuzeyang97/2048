// 个人档案页
import React, { Component } from 'react';
import { Layout} from 'antd';
import ContentHeader from './contentHeader/contentHeader.js';
import ContentTabWrap from './contentTabWrap.js';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';

const { Content } = Layout;

 class ContentWrap extends Component {
    constructor(props) {
      super(props)
  
    }
    componentDidMount() {
      const {Actions} = this.props;
      const mid='MID330900002';
      console.log(Actions)
      Actions.fetchUserInfo(mid);
      Actions.fetchLessonInfo(mid);
      Actions.getSatisfiledList(mid);
    }
    render() {
      const {Actions} = this.props;
      const {userInfo, keysMap} =this.props.userInfo
      const { onlineCourse,  historyCourse }=this.props.LessonInfo
      const { satisFiledList }=this.props.satisFiledList
      const { popover }=this.props
      return (
        <Content>
            <ContentHeader  userInfo={userInfo}  keysMap={ keysMap} />
            <ContentTabWrap
             popover={popover}
             Actions={Actions}
             onlineCourse={onlineCourse}
             historyCourse={historyCourse}
             satisFiledList={satisFiledList}
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContentWrap);