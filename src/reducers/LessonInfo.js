import React from 'react'
import { Icon } from 'antd';
import * as ActionTypes from '../const/ActionTypes';

const initialState = {
  onlineCourse: [],
  historyCourse: [],
  CourseTitle: [{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
    render: (text) => {
      return (<span><Icon type="info-circle" />{text}</span>)
    }
  }, {
    title: '课程状态',
    dataIndex: 'courseState',
    key: 'courseState',
  }, {
    title: '开课时间',
    dataIndex: 'courseStart',
    key: 'courseStart',
  }, {
    title: '老师',
    dataIndex: 'teacher',
    key: 'teacher',
    render: (text) => {
      return (<span><Icon type="qq" />{text}</span>)
    }
  }, {
    title: '上课率',
    dataIndex: 'courselv',
    key: 'courselv',
    render: (text) => {
      let num1 = parseInt(text.split('/')[0])
      let num2 = parseInt(text.split('/')[1])
      const numValue = num1 / num2
      if (numValue > 0.95)
        return (<span className='orange-span'>{text}</span>)
      if (numValue < 0.8)
        return (<span className='red-span'>{text}</span>)
      else
        return (<span>{text}</span>)
    }
  }, {
    title: '作业提交率',
    dataIndex: 'homeworklv',
    key: 'homeworklv',
    render: (text) => {
        const baifentext=(text*100).toFixed(2)+'%'
      if (text > 0.95)
        return (<span className='orange-span'>{baifentext}</span>)
      if (text < 0.8)
        return (<span className='red-span'>{baifentext}</span>)
      else
        return (<span>{baifentext}</span>)
    }
  }, {
    title: '被点评情况',
    dataIndex: 'review',
    key: 'review',
    render: (text) => {
        const baifentext=(text*100).toFixed(2)+'%'
      if (text > 0.95)
        return (<span className='orange-span'>{baifentext}</span>)
      if (text < 0.8)
        return (<span className='red-span'>{baifentext}</span>)
      else
        return (<span>{baifentext}</span>)
    }
  }, {
    title: '打卡率',
    dataIndex: 'cardlv',
    key: 'cardlv',
    render: (text) => {
      let num1 = parseInt(text.split('/')[0])
      let num2 = parseInt(text.split('/')[1])
      const numValue = num1 / num2
      if (numValue > 0.95)
        return (<span className='orange-span'>{text}</span>)
      if (numValue < 0.8)
        return (<span className='red-span'>{text}</span>)
      else
        return (<span>{text}</span>)
    }
  }, {
    title: '满意度',
    dataIndex: 'degreelv',
    key: 'degreelv',
    render: (text) => {
        const baifentext=(text*100).toFixed(2)+'%'
      if (text > 0.95)
        return (<span className='orange-span'>{baifentext}</span>)
      if (text < 0.8)
        return (<span className='red-span'>{baifentext}</span>)
      else
        return (<span>{baifentext}</span>)
    }
  }]
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_INFO}_REQ`: {
      const newState = { ...state, loadFlag: true }
      return newState
    }
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const newOnlineCourse=action.data.currentLessonsList.map((item,index)=>{
        return{
            key: index+1,
            class: item.classInfo.name,
            courseState:item.status?'进行中':'已结束',
            courseStart: item.startTime,
            teacher:item.teacherInfo.nick,
            courselv: item.enterRate,
            homeworklv: item.homeworkSubmitRate,
            review: item.beCommenttedRate,
            cardlv: item.signRate,
            degreelv: item.satisfyRate
        }
      })
      const newHistoryCourse=action.data.historyLessonsList.map((item,index)=>{
        return{
            key: index+1,
            class: item.classInfo.name,
            courseState:item.status?'进行中':'已结束',
            courseStart: item.startTime,
            teacher:item.teacherInfo.nick,
            courselv: item.enterRate,
            homeworklv: item.homeworkSubmitRate,
            review: item.beCommenttedRate,
            cardlv: item.signRate,
            degreelv: item.satisfyRate
        }
      })
      const newState = { ...state,onlineCourse:newOnlineCourse,historyCourse:newHistoryCourse, loadFlag: false }
      return newState
    }
    case `${ActionTypes.FETCH_LESSON_INFO}_FAI`: {
      return state
    }
    default:
      return state
  }
}

export default reducer