import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header/Header.js'
import Slider from '../components/Slider/Slider.js'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js'
import * as actionCreators from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Container extends Component {
  constructor(props) {
    super(props)
  }
  closePopover=()=>{
    const{Actions,popover}=this.props
    if(popover.flag)
    Actions.hidePopover()
    else
    return
 }
  render() {
   const {router}=this.props
    return (
      <Layout onClick={this.closePopover}>
        <Header />
        <Layout>
          <Slider />
          <Layout>
          <Breadcrumb router={router}/>
            {this.props.children}
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
