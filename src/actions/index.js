import * as ActionTypes from '../const/ActionTypes';
// 获取用户信息
export function fetchUserInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_USER_INFO,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}
// 获取课程信息
export function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_LESSON_INFO,
      endpoint: '/getLessonInfo',
      params: {
        mid
      }
    }
  }
}
// 获取学生列表
export function fetchStudentList() {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_STUDENT_LIST,
      endpoint: '/getStudentList',
      params: {
      }
    }
  }
}
// 搜索学生
export function searchStudent(mid) {
  return {
      type: ActionTypes.SEARCH_STUDENT,
      data:mid
    }
}
// 获取上课详情
export function getClassInfo() {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_CLASS_INFO,
      endpoint: '/getClassInfo',
      params: {
        id:1
      }
    }
  }
}
// 获取满意度反馈信息
export function getSatisfiledList(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_SATISFILED_LIST,
      endpoint: '/getSatisfiledList',
      params: {
        mid
      }
    }
  }
}
//  改变回复状态
export function changeSatisfiled(index) {
  return {
      type: ActionTypes.CHANGE_SATISFILED,
      data:index
  }
}
// 显示信息气泡
export function showPopover(data) {
  return {
      type: ActionTypes.SHOW_POPOVER,
      data
  }
}
// 隐藏信息气泡
export function hidePopover(data) {
  return {
      type: ActionTypes.HIDE_POPOVER,
      data
  }
}