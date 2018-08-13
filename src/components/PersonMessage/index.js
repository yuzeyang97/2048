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
      Actions.fetchUserInfo(mid);
      Actions.fetchLessonInfo(mid);
      Actions.getSatisfiledList(mid);
    }
    render() {
      const {Actions} = this.props;
      const {userInfo, keysMap} =this.props.userInfo
      const { LessonInfo }=this.props
      const { satisFiledList }=this.props
      const { popover }=this.props
      const {router}=this.props
      return (
        <Content>
            <ContentHeader  userInfo={userInfo}  keysMap={ keysMap} />
            <ContentTabWrap
             popover={popover}
             Actions={Actions}
             LessonInfo={LessonInfo}
             satisFiledList={satisFiledList}
             router={router}
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