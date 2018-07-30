import React from 'react'
import {Icon} from 'antd';
const initialState = {
    userInfo:{
        usericon:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        username:'啦啦啦',
        detailed1:{
        userid:'MID330900002',
        course:'摄影课 绘画课' ,
        startTime:'2018-03-30'},
        detailed2:{
          historyPay:987,
          allStudyDay:876,
          lastTime:'2018-03-30'
        },
        telephone:'13212333124',
        wechat:'yuzong5566',
        remarks:'加油呦'
      
    },
    keysMap:{
        userid:"学号编号",
        course:"在学课程",
        startTime:"入学时间",
        historyPay:"历史付费额",
        allStudyDay:"累计学习天数",
        lastTime:"最后登录时间",
        telephone:"手机号码",
        wechat:"微信号码",
        remarks:"备注"
    },
    onlineCourse: [{
        key: '1',
        class: '高级班',
        courseState:'进行中',
        courseStart: '2017-4-20',
        teacher:'小白老师',
        courselv:'3/21',
        homeworklv:'67.89%',
        review:'87.98%',
        cardlv:'3/21',
        degreelv:'90.14%'
      }, {
        key: '2',
        class: '进阶班',
        courseState:'进行中',
        courseStart: '2017-4-20',
        teacher:'小白老师',
        courselv:'5/21',
        homeworklv:'76.89%',
        review:'31.87%',
        cardlv:'5/21',
        degreelv:'98.14%'
      },{
        key: '3',
        class: '提高班',
        courseState:'进行中',
        courseStart: '2017-4-20',
        teacher:'小白老师',
        courselv:'13/21',
        homeworklv:'13.89%',
        review:'21.76%',
        cardlv:'13/21',
        degreelv:'88.01%'
      },{
        key: '4',
        class: '入门班',
        courseState:'进行中',
        courseStart: '2017-4-20',
        teacher:'小白老师',
        courselv:'20/21',
        homeworklv:'98.45%',
        review:'98.67%',
        cardlv:'20/21',
        degreelv:'30.10%'
      },{
        key: '5',
        class: '体验班',
        courseState:'已结束',
        courseStart: '2017-4-20',
        teacher:'小白老师',
        courselv:'21/21',
        homeworklv:'31.54%',
        review:'78.76%',
        cardlv:'21/21',
        degreelv:'94.10%'
      }],
    CourseTitle:[{
        title: '班级',
        dataIndex: 'class',
        key: 'class',
        render:(text)=>{
            return(<span><Icon type="info-circle"/>{text}</span>)
        }
      }, {
        title: '课程状态',
        dataIndex: 'courseState',
        key: 'courseState',
      }, {
        title: '开课时间',
        dataIndex: 'courseStart',
        key: 'courseStart',
      },{
        title: '老师',
        dataIndex: 'teacher',
        key: 'teacher',
        render:(text)=>{
            return(<span><Icon type="qq"/>{text}</span>)
        }
      },{
        title: '上课率',
        dataIndex: 'courselv',
        key: 'courselv',
        render:(text)=>{
            const numValue=eval(text)
            if(numValue>0.95)
            return(<span className='orange-span'>{text}</span>)
            if(numValue<0.8)
            return(<span className='red-span'>{text}</span>)
            else
            return(<span>{text}</span>)
        }
      },{
        title: '作业提交率',
        dataIndex: 'homeworklv',
        key: 'homeworklv',
        render:(text)=>{
            const numValue=text.replace("%","")/100
            console.log(numValue)
            if(numValue>0.95)
            return(<span className='orange-span'>{text}</span>)
            if(numValue<0.8)
            return(<span className='red-span'>{text}</span>)
            else
            return(<span>{text}</span>)
        }
      },{
        title: '被点评情况',
        dataIndex: 'review',
        key: 'review',
        render:(text)=>{
            const numValue=text.replace("%","")/100
            console.log(numValue)
            if(numValue>0.95)
            return(<span className='orange-span'>{text}</span>)
            if(numValue<0.8)
            return(<span className='red-span'>{text}</span>)
            else
            return(<span>{text}</span>)
        }
      },{
        title: '打卡率',
        dataIndex: 'cardlv',
        key: 'cardlv',
        render:(text)=>{
            const numValue=eval(text)
            if(numValue>0.95)
            return(<span className='orange-span'>{text}</span>)
            if(numValue<0.8)
            return(<span className='red-span'>{text}</span>)
            else
            return(<span>{text}</span>)
        }
      },{
        title: '满意度',
        dataIndex: 'degreelv',
        key: 'degreelv',
        render:(text)=>{
            const numValue=text.replace("%","")/100
            console.log(numValue)
            if(numValue>0.95)
            return(<span className='orange-span'>{text}</span>)
            if(numValue<0.8)
            return(<span className='red-span'>{text}</span>)
            else
            return(<span>{text}</span>)
        }
      }],
      historyCourse:[{
        key: '1',
        class: '高级班',
        courseState:'已结束',
        courseStart: '2017-4-20',
        teacher:'小白老师',
        courselv:'3/21',
        homeworklv:'67.89%',
        review:'87.98%',
        cardlv:'3/21',
        degreelv:'90.14%'
      }]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer
