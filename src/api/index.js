import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';

export function fetchUserInfo(mid,next) {
  next({
    type: `${ActionTypes.FETCH_INFO}_REQ`
  });

  axios({
    method: 'POST',
    url: 'http://xly-wkop.xiaoniangao.cn/getUserInfo',
    data: {
        'mid': mid
      },
   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(res => {
    console.log(res);
    next({
      type: `${ActionTypes.FETCH_USER_INFO}_SUC`,
      data: res.data.data
    });
  })
  .catch(err => {
    console.log(err);
    next({
      type: `${ActionTypes.FETCH_USER_INFO}_FAI`
    });
  });
}

export function fetchLessonInfo(mid,next) {
    next({
      type: `${ActionTypes.FETCH_INFO}_REQ`
    });
  
    axios({
      method: 'POST',
      url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo',
      data: {
         'mid': mid
        },
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }).then(res => {
      console.log(res);
      next({
        type: `${ActionTypes.FETCH_LESSON_INFO}_SUC`,
        data: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: `${ActionTypes.FETCH_LESSON_INFO}_FAI`
      });
    });
  }