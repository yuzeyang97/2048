import * as ActionTypes from '../const/ActionTypes';
import * as schemes from '../schema';
import { normalize } from 'normalizr';
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
      },
      normailzerFun: response => {
        const onlineCourse = normalize(response.data.currentLessonsList, schemes.CURRENTLESSONSLIST)
        const historyCourse = normalize(response.data.historyLessonsList, schemes.HISTORYLESSONSLIST)
        return {
          onlineCourse,
          historyCourse
        }
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
      },
      normailzerFun: response => normalize(response.data, schemes.STUDENTLIST)
    }
  }
}
// 搜索学生
export function searchStudent(mid) {
  return {
    type: ActionTypes.SEARCH_STUDENT,
    data: mid
  }
}
// 获取上课详情
export function getClassInfo() {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_CLASS_INFO,
      endpoint: '/getClassInfo',
      params: {
        id: 1
      },
      normailzerFun: response => {
        const classList = normalize(response.data.list, schemes.CLASSLIST)
        return {
          ...response.data,
          list:classList
          
        }
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
      },
      normailzerFun: response => normalize(response.data.list, schemes.SATISFILEDLIST)
    }
  }
}
//  改变回复状态
export function changeSatisfiled(index) {
  return {
    type: ActionTypes.CHANGE_SATISFILED,
    data: index
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

// 获取当前老师未点评任务
export function getCurrentUnreview() {
  return {
    SERVER_API: {
      type: ActionTypes.GET_CURRENT_UNREVIEW,
      endpoint: '/getHomeWork',
      params: {
        token:1,
        isReviewed:0
      },
      normailzerFun: response =>normalize(response.data, schemes.CURRENTUNREVIEW)
    }
  }
}

// 获取当前老师已点评任务
export function getCurrentReview(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.GET_CURRENT_REVIEW,
      endpoint: '/getHomeWork',
      params: {
        token:1,
        isReviewed:1
      },
      normailzerFun: response =>normalize(response.data, schemes.CURRENTUNREVIEW)
    }
  }
}

// 获取全部未点评任务
export function getAllUnreview(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.GET_ALL_UNREVIEW,
      endpoint: '/getHomeWork',
      params: {
        token:0,
        isReviewed:0
      },
      normailzerFun: response =>normalize(response.data, schemes.CURRENTUNREVIEW)
    }
  }
}

// 获取全部已点评任务
export function getAllReview(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.GET_ALL_REVIEW,
      endpoint: '/getHomeWork',
      params: {
        token:0,
        isReviewed:1
      },
      normailzerFun: response =>normalize(response.data, schemes.CURRENTUNREVIEW)
    }
  }
}