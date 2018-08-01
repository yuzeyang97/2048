import LessonInfo from './userInfo/lessonInfo.js'
import userInfo from './userInfo/userInfo.js'
import studentList from './studentList.js'
import classInfo from './classInfo.js'
import {combineReducers} from 'redux'

export default combineReducers({
  LessonInfo,
  userInfo,
  studentList,
  classInfo
})

