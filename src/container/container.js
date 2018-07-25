import React, { Component } from 'react';
import List from '../components/MessageItem.js';
import Tab from '../components/TabBtn.js';
import ChangeItemDialog from '../components/ChangeItemDialog.js';
import AddItemDialog from '../components/AddItemDialog.js';
import HeadTitle from '../components/HeadTitle.js'
import { connect } from 'react-redux'
import * as action from '../actions'


 class Container extends Component {
    constructor(props) {
      super(props)
      
    }
  
    render() {
      return (
        <div className="container"> 
              {this.renderHeadTitle()}  
          <div className="content">
              {this.renderListItem()}
          </div>
          <div className="tab-bar">
              {this.renderTabBar()}
          </div>
              {this.renderChangeItemDialog()}
              {this.renderAddItemDialog()}
        </div>
      );
    }

    // 渲染头部导航栏
renderHeadTitle=()=>{
    const {appTitle,dispatch,mulflag} = this.props;
    return <HeadTitle dispatch={dispatch} title={appTitle} mulflag={mulflag}/>
  }
// 渲染底部导航栏
renderTabBar=()=>{
    const {data} = this.props;
return data.map((item,idex)=>{
    return <Tab data={item} key={idex}></Tab>
})
}
// 渲染Listitem模板
renderListItem=()=>{
    const {listItem,dispatch,mulflag} = this.props;
  const ListItem=listItem.map((item,idex)=>{
    return <List data={item} key={idex} itemIndex={idex} mulflag={mulflag} dispatch={dispatch}></List>
})
  return ListItem;
}
// 渲染更改模板
renderChangeItemDialog=()=>{
const {changeItemBtn,changeFlag,dispatch} = this.props;
  if(changeFlag)
  return (<ChangeItemDialog   changeItemBtn={changeItemBtn} dispatch={dispatch} />)
}
// 渲染添加模板
renderAddItemDialog=()=>{
  const {addFlag,dispatch} = this.props;
  if(addFlag)
  return (<AddItemDialog  dispatch={dispatch}/>)
}
}

function mapStateToProps(state){
    const props = state;
    return props;
  }
  
export default connect(mapStateToProps)(Container);
