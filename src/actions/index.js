import * as ActionTypes from '../const/ActionTypes';

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

export function searchStudent(mid) {
  return {
      type: ActionTypes.SEARCH_STUDENT,
      data:mid
    }
}

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