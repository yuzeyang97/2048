import React, { Component } from 'react';
import List from './components/MessageItem.js';
import Button from './components/button.js';
import Dialog from './components/dialog.js';
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
      dialogBtnList:[
        {btnName: "全选"},
        {btnName: "增加"},
        {btnName: "删除"},
        {btnName: "修改"}
      ],
      flag:false
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="bounceInDown">小年糕</h1>
        </div>
      
        <div className="content">
        {
        this.state.listItem.map((item,idex)=>{
            return <List data={item} key={idex} showDialog={this.showDialog}></List>
        })
        }
        </div>

        <div className="tab-bar">
        {
        this.state.data.map((item,idex)=>{
            return <Button data={item} key={idex}></Button>
        })
        }
        </div>
        {this.state.flag ? (<Dialog data={this.state.dialogBtnList} showDialog={this.showDialog} />)  :''}
      </div>
    );
  }

  showDialog=()=>{
    this.setState({
      flag: !this.state.flag
    })
  }
}

export default App;