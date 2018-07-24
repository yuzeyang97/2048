import React, { Component } from 'react';
import Title from './components/title';
import Item from './components/item';
import TabBar from './components/tabBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appTitle: '作 业',
      itemList: [
        { title: '我', btnList: ['redBtn', 'purpleBtn', 'blackBtn', 'greenBtn'], type: 'me' },
        { title: '微信', btnList: ['purpleBtn', 'redBtn', 'blackBtn', 'greenBtn'], type: 'weixin' },
        { title: '通讯录', btnList: ['purpleBtn', 'blackBtn', 'redBtn', 'greenBtn'], type: 'address' },
        { title: '发现', btnList: ['blackBtn', 'greenBtn', 'redBtn', 'purpleBtn'], type: 'find' }
      ],
      tabBar: [
        { title: '我', bgColor: 'redBtnFont', type: 'me' },
        { title: '微信', bgColor: 'purpleBtnFont', type: 'weixin' },
        { title: '通讯录', bgColor: 'purpleBtnFont', type: 'address' },
        { title: '发现', bgColor: 'blackBtnFont', type: 'find' }
      ]
    };
  }
  // 渲染头部
  renderTitle = () => {
    return <Title title={this.state.appTitle} />
  }
  // 渲染列表项
  renderItem = () => {
    const itemLIst = this.state.itemList.map((item, idex) => {
      return <Item data={item} currentIdex={idex} topItem={this.topItem} />
    })
    return itemLIst
  }
  // 渲染导航栏
  renderTabBar = () => {
    return <TabBar tabBarBtnList={this.state.tabBar} />
  }
  // 置顶点击
  topItem = (itemidex, idex, type) => {
    const topView = this.state.itemList.splice(itemidex, 1)[0];
    const topViewBtnList = topView.btnList;
    const currentClickColor = topViewBtnList.splice(idex, 1)[0];
    topViewBtnList.unshift(currentClickColor);
    const newList = this.state.itemList.slice();
    newList.unshift(topView);
    const newTabBar = this.changeColor(type, currentClickColor);

    this.setState({
      tabBar: newTabBar,
      itemList: newList
    })
  }
  // 更改导航栏文字颜色
  changeColor = (type, currentColor) => {
    const arr = this.state.tabBar.map((item, idex) => {
      if (item.type == type)
        return idex
    })
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "" || typeof (arr[i]) == "undefined") {
        arr.splice(i, 1);
        i = i - 1;
      }
    }
    const index = arr[0];
    console.log(index)
    const newTabBar = this.state.tabBar.slice();
    newTabBar[index].bgColor = currentColor + 'Font';
    return newTabBar;
  }
  // 渲染
  render() {
    return (
      <div className="app">
        {this.renderTitle()}
        <div className='app-content'>
          {this.renderItem()}
        </div>
        {this.renderTabBar()}
      </div>
    );
  }
}

export default App;
