import LessonInfo from './userInfo/lessonInfo.js'
import userInfo from './userInfo/userInfo.js'
import satisFiledList from './userInfo/satisfiled.js'
import studentList from './studentList.js'
import classInfo from './classInfo.js'
import popover from './popover.js'
import {combineReducers} from 'redux'
import entities from './entities.js'
import homework from './homework'


export default combineReducers({
  LessonInfo,
  userInfo,
  satisFiledList,
  studentList,
  classInfo,
  popover,
  entities,
  homework
})