// 个人档案页
import React, { Component } from 'react';
import { Layout} from 'antd';
import HomeworkHeader from './HomeworkHeader/HomeworkHeader.js';
import HomeworkTabContent from './HomeworkTabContent/HomeworkTabContent.js';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import './index.css'

const { Content } = Layout;

 class HomeworkReview extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      const {Actions} = this.props;
     Actions.getCurrentUnreview();
     Actions.getCurrentReview();
     Actions.getAllUnreview();
     Actions.getAllReview();
    }
    render() {
      const {Actions} = this.props;
      console.log(this.props)
      const {entities,homework}=this.props
      return (
        <Content>         
            <HomeworkHeader Actions={Actions}/>
            <HomeworkTabContent entities={entities} homework={homework} Actions={Actions}/>
        </Content>
      );
    }
  }

  function mapStateToProps(state) {
    const{entities,homework}=state
    const props = {
      entities,
      homework
    }
    return props;
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);