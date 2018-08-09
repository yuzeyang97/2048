import React, { Component } from 'react';
import './App.css';
import ActionSheet from './component/ActionSheet/ActionSheet.js'
import Dialog from './component/Dialog/Dialog.js'
import Progress from './component/Progress/Progress.js'
import Slider from './component/Slider/Slider.js'
import Switch from './component/Switch/Switch.js'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      sheetIsActive:false,
      dialogIsActive:false,
      type:'iOS',
      title:'弹窗标题',
      menus:[
        { title: '默认事例',click:()=>{alert(123)} },
        { title: '默认事例',click:()=>{alert(123)} }, 
        { title: '默认事例',click:()=>{alert(123)} }
      ],
      renderBody:()=>{
        return (<span>这是一个例子</span>)
      },
      defaultValue:60,
      switchchecked:true
    }
  }
  showIosActionSheet=()=>{
    this.setState({
      type:'iOS',
      sheetIsActive:true
    })
  }
  showAndriodActionSheet=()=>{
    this.setState({
      type:'',
      sheetIsActive:true
    })
  }
  hideActionSheet=()=>{
    this.setState({
      sheetIsActive:false
    })
  }
  showIosDialog=()=>{
    this.setState({
      type:'iOS',
      dialogIsActive:true
    })
  }
  showAndriodDialog=()=>{
    this.setState({
      type:'',
      dialogIsActive:true
    })
  }
  hideDialog=()=>{
    this.setState({
      dialogIsActive:false
    })
  }
  changeDefault=(val)=>{
    this.setState({
      defaultValue:val
    })
  }
  changeswitch=()=>{
    const {switchchecked}=this.state
    this.setState({
      switchchecked:!switchchecked
    })
    console.log('这是回调函数 当前状态',!switchchecked)
  }
  render() {
    return (
      <div className='component-wrapper'>
        <button onClick={this.showIosActionSheet}>IOS-ActionSheet点击显示按钮</button>
        <button onClick={this.showAndriodActionSheet}>安卓-ActionSheet安卓点击按钮</button>
        <button onClick={this.showIosDialog}>IOS-Dialog点击按钮</button>
        <button onClick={this.showAndriodDialog}>安卓-Dialog点击按钮</button>
        <ActionSheet 
        isActive={this.state.sheetIsActive}
        onCancel={this.hideActionSheet} 
        type={this.state.type}
        title={this.state.title}
        menus={this.state.menus}
        />
        <Dialog 
        isActive={this.state.dialogIsActive}
        onCancel={this.hideDialog} 
        type={this.state.type}
        title={this.state.title}
        renderBody={this.state.renderBody}
        />
        <div className='progress-wrap'>
        <Progress value={this.state.defaultValue}/>
        </div>

        <Slider defaultValue={this.state.defaultValue} onChange={this.changeDefault}/>
        <div className="swich-wrap">
        <Switch checked={this.state.switchchecked} onChange={this.changeswitch}/>
        </div>
      </div>
    );
  }
}
