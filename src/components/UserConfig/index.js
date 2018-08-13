// 权限管理页
import React, { Component } from 'react';
import { Layout} from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import ConfigList from './ConfigList/ConfigList.js'
import ConfigContent from './ConfigContent/ConfigContent.js'

const { Content } = Layout;

 class UserConfig extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const {entities,userConfig,Actions}=this.props
      return (
        <Content>
            <ConfigList entities={entities} userConfig={userConfig} Actions={Actions}/>
            {userConfig.configFlag?<ConfigContent entities={entities} userConfig={userConfig} Actions={Actions}/>:''}  
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserConfig);