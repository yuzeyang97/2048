import React, { Component } from 'react';

import List from './components/MessageItem.js';
import Tab from './components/TabBtn.js';
import ChangeItemDialog from './components/ChangeItemDialog.js';
import AddItemDialog from './components/AddItemDialog.js';
import HeadTitle from './components/HeadTitle.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      listItem: [
        {img: require("./img/1.jpg"), title: "小年糕前端大拿群", description: "欧文:真理惟一可靠的标准就是永远自相符合", time: "上午11:35"},
        {img: require("./img/2.jpg"), title: "小年糕后端大拿群", description: "习近平:我最挂念的还是困难群众", time: "上午10:25"},
        {img: require("./img/3.jpg"), title: "小年糕前端训练营", description: "德奥弗拉斯多:时间是一切财富中最宝贵的财富", time: "上午8:37"},
        {img: require("./img/4.jpg"), title: "小年糕后端训练营", description: "爽哥:加油~~~", time: "上午2:35"},
        {img: require("./img/5.jpg"), title: "小年糕大数据大拿群", description: "袁中道:人生贵知心，定交无暮早", time: "上午00:26"},
        {img: require("./img/6.jpg"), title: "小年糕平面设计", description: "魏磊:生死看淡不服就干", time: "上午1:11"},
        {img: require("./img/7.jpg"), title: "欢乐一家亲", description: "爽哥:加油~~~", time: "上午12:35"},
        {img: require("./img/8.jpg"), title: "东北一家人", description: "于泽洋:加油加油加油", time: "上午3:35"},
        {img: require("./img/9.jpg"), title: "天南海北各地群", description: "宝宝:爱你呦", time: "上午2:35"}
            ],
      data:[
        {img: require("./img/aburimochi.png"),btnName: "小年糕"},
        {img: require("./img/list.png"),btnName: "通讯录"},
        {img: require("./img/search.png"),btnName: "发现"},
        {img: require("./img/user.png"),btnName: "我"}
      ],
      changeItemBtn:[
        {method:this.topItem,context:'置顶'},
        {method:this.deleteItem,context:'删除'},
        {method:this.showMulSelect,context:'多选删除'}
      ],
      currentIndex:null,
      appTitle:'小年糕',
      changeFlag:false,
      addFlag:false,
      mulflag:false,
      deleteItemArray:[]
    }
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
            {this. renderAddItemDialog()}
      </div>
    );
  }
// 渲染底部导航栏
  renderHeadTitle=()=>{ 
      return <HeadTitle showAddDialog={this.showAddDialog} title={this.state.appTitle} deleteMoreItem={this.deleteMoreItem} mulflag={this.state.mulflag}/>
    }
// 渲染底部导航栏
  renderTabBar=()=>{
  return this.state.data.map((item,idex)=>{
      return <Tab data={item} key={idex}></Tab>
  })
  }
// 渲染Listitem模板
  renderListItem=()=>{
    const ListItem=this.state.listItem.map((item,idex)=>{
      return <List data={item} key={idex} itemIndex={idex} mulflag={this.state.mulflag} showDialog={this.showChangeDialog.bind(this,idex)}  pushDeleteItem={this.pushDeleteItem}></List>
  })
    return ListItem;
  }
// 渲染更改模板
  renderChangeItemDialog=()=>{
    if(this.state.changeFlag)
    return (<ChangeItemDialog  showDialog={this.showChangeDialog}  changeItemBtn={this.state.changeItemBtn} />)
  }
// 渲染添加模板
  renderAddItemDialog=()=>{
    if(this.state.addFlag)
    return (<AddItemDialog  showDialog={this.showAddDialog} addItem={this.addItem}/>)
}
// 显示更改项目模板
  showChangeDialog=(e)=>{
    this.setState({
      changeFlag: !this.state.changeFlag,
      currentIndex:e
    })
    console.log(e)
  }
// 显示添加项目模板
  showAddDialog=()=>{
    this.setState({
      addFlag: !this.state.addFlag
    })
  }
// 显示多选按钮
  showMulSelect=()=>{
    this.setState({
      mulflag: !this.state.mulflag
    })
    this.showChangeDialog();
  }
// 添加项目
  addItem=(title,description,time)=>{
    const newList=this.state.listItem.slice()
     newList.unshift({
      img: require("./img/1.jpg"),
      title:title,
      description:description,
      time:time
    });
    console.log(newList)
    this.setState({
      listItem:newList
    })
  }
// 置顶项目
    topItem=()=>{
      const topView=this.state.listItem.splice(this.state.currentIndex,1);
      console.log(topView)
      const newList=this.state.listItem.slice();
      console.log(newList)
      newList.unshift(topView[0]);
      this.setState({
      listItem:newList
    })
      this.showChangeDialog();
    }
// 删除项目
    deleteItem=()=>{
      this.state.listItem.splice(this.state.currentIndex,1);
      const newList=this.state.listItem.slice();
      this.setState({
        listItem:newList
      })
      this.showChangeDialog();
    }
// 多选删除项目
    deleteMoreItem=()=>{
      console.log(this.state.deleteItemArray)
      this.state.deleteItemArray.map((item)=>{
        delete this.state.listItem[item]
      })
      const newList=this.state.listItem.filter((n)=>{return n});
      this.setState({
        deleteItemArray:[],
        listItem:newList,
        mulflag:false
      })
    }
// 添加删除项
    pushDeleteItem=(e)=>{
      
      if(e.target.checked)
      this.state.deleteItemArray.push(e.target.value)
      else{
        let cancelItem=this.state.deleteItemArray.indexOf(e.target.value)
        this.state.deleteItemArray.splice(cancelItem,1)
      }
      console.log( this.state.deleteItemArray)
    }
}

export default App;
