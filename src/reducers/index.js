/* eslint-disable */
import ActionTypes from '../const/ActionTypes';

// 定义初始state
const initState = {
  btns: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  score: 0,
  bestScore: 0,
  title: '2048',
  description: "Keypressing 'W S A D' on PC. Touch moving on Phone.",
  newBtn: [],
  addScore: 0
};
// 随机生成按钮
function randomAddBtn(btnList, newBtn) {
  const randomrow = Math.floor(Math.random() * 4);
  const randomcol = Math.floor(Math.random() * 4);
  if (btnList[randomrow][randomcol] == 0) {
    const randomArr = [2, 4];
    btnList[randomrow][randomcol] = randomArr[Math.round(Math.random())];
    newBtn[0] = randomrow;
    newBtn[1] = randomcol;
    console.log(randomrow, randomcol)
    return;
  } else {
    randomAddBtn(btnList, newBtn);
  }
}
// 检验是否GameOver
function checkStatus(btnList) {
  let gameoverflag = true;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (btnList[row][col] == 0) { gameoverflag = false; }
      if (btnList[row + 1]) { if (btnList[row][col] == btnList[row + 1][col]) gameoverflag = false; }
      if (btnList[row][col + 1]) { if (btnList[row][col] == btnList[row][col + 1]) gameoverflag = false; }
      if (btnList[row - 1]) { if (btnList[row][col] == btnList[row - 1][col]) gameoverflag = false; }
      if (btnList[row][col - 1]) { if (btnList[row][col] == btnList[row][col - 1]) gameoverflag = false; }
    }
  }
  if (gameoverflag) {
    alert('游戏结束');
    return false;
  }
  else {
    return true
  }
}
// 方向操作
function handlemove(state, type) {
  let { btns, score, bestScore } = { ...state };
  let addScore = score;
  let newbtns = [[...btns[0]], [...btns[1]], [...btns[2]], [...btns[3]]];
  switch (type) {
    case 'bottom': {
      for (let row = 2; row >= 0; row--) {
        for (let col = 0; col < 4; col++) {
          const currentbtn = newbtns[row][col];
          let s;
          for (let k = row + 1; k < 4; k++) {
            if (newbtns[k][col] != 0) { s = k; break; }
            if (k == 3) { s = 3; break; }
          }
          const nextbtn = newbtns[s][col];
          if (currentbtn == nextbtn) {
            newbtns[s][col] *= 2;
            score += newbtns[s][col];
            newbtns[row][col] = 0;
          }
          if (currentbtn != nextbtn) {
            if (nextbtn != 0) {
              const k = newbtns[row][col];
              newbtns[row][col] = 0;
              newbtns[s - 1][col] = k;
            } else {
              newbtns[s][col] = newbtns[row][col];
              newbtns[row][col] = 0;
            }
          }
        }
      }
    }; break;
    case 'top': {
      for (let row = 1; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          const currentbtn = newbtns[row][col];
          let s;
          for (let k = row - 1; k >= 0; k--) {
            if (newbtns[k][col] != 0) { s = k; break; }
            if (k == 0) { s = 0; break; }
          }
          const nextbtn = newbtns[s][col];
          if (currentbtn == nextbtn) {
            newbtns[s][col] *= 2;
            score += newbtns[s][col];
            newbtns[row][col] = 0;
          }
          if (currentbtn != nextbtn) {
            if (nextbtn != 0) {
              const k = newbtns[row][col];
              newbtns[row][col] = 0;
              newbtns[s + 1][col] = k;
            } else {
              newbtns[s][col] = newbtns[row][col];
              newbtns[row][col] = 0;
            }
          }
        }
      }
    }; break;
    case 'left': {
      for (let col = 1; col < 4; col++) {
        for (let row = 0; row < 4; row++) {
          const currentbtn = newbtns[row][col];
          let s;
          for (let k = col - 1; k >= 0; k--) {
            if (newbtns[row][k] != 0) { s = k; break; }
            if (k == 0) { s = 0; break; }
          }
          const nextbtn = newbtns[row][s];
          if (currentbtn == nextbtn) {
            newbtns[row][s] *= 2;
            score += newbtns[row][s];
            console.log(addScore);
            newbtns[row][col] = 0;
          }
          if (currentbtn != nextbtn) {
            if (nextbtn != 0) {
              const k = newbtns[row][col];
              newbtns[row][col] = 0;
              newbtns[row][s + 1] = k;
            } else {
              newbtns[row][s] = newbtns[row][col];
              newbtns[row][col] = 0;
            }
          }
        }
      }
    }; break;
    case 'right': {
      for (let col = 2; col >= 0; col--) {
        for (let row = 0; row < 4; row++) {
          const currentbtn = newbtns[row][col];
          let s;
          for (let k = col + 1; k < 4; k++) {
            if (newbtns[row][k] != 0) { s = k; break; }
            if (k == 3) { s = 3; break; }
          }
          const nextbtn = newbtns[row][s];
          if (currentbtn == nextbtn) {
            newbtns[row][s] *= 2;
            score += newbtns[row][s];
            newbtns[row][col] = 0;
          }
          if (currentbtn != nextbtn) {
            if (nextbtn != 0) {
              const k = newbtns[row][col];
              newbtns[row][col] = 0;
              newbtns[row][s - 1] = k;
            } else {
              newbtns[row][s] = newbtns[row][col];
              newbtns[row][col] = 0;
            }
          }
        }
      }
    } break;
    default: return state
  }
  let newBtn = [];
  if (checkStatus(newbtns) && JSON.stringify(newbtns) != JSON.stringify(btns)) { randomAddBtn(newbtns, newBtn) }
  bestScore > score ? '' : bestScore = score;
  addScore = score - addScore;
  let newState = { ...state, btns: newbtns, score, bestScore, newBtn, addScore };
  return newState;
}

// reduer主体
export default function (state = initState, action) {
  switch (action.type) {
    case `${ActionTypes.INIT_HANDLE}`: {
      let newState = { ...state };
      let { btns } = newState;
      btns = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const row1 = Math.floor(Math.random() * 4);
      const col1 = Math.floor(Math.random() * 4);
      let row2 = Math.floor(Math.random() * 4);
      let col2 = Math.floor(Math.random() * 4);
      if (row1 == row2 && col1 == col2) {
        row2 = Math.floor(Math.random() * 4);
        col2 = Math.floor(Math.random() * 4);
      }
      const randomArr = [2, 4];
      btns[row1][col1] = randomArr[Math.round(Math.random())];;
      btns[row2][col2] = randomArr[Math.round(Math.random())];;
      newState = { ...newState, btns, score: 0, addScore: 0 };
      return newState;
    }
    // 下操作
    case `${ActionTypes.BOTTOM_HANDLE}`: {
      return handlemove(state, 'bottom')
    }
    // 上操作
    case `${ActionTypes.TOP_HANDLE}`: {
      return handlemove(state, 'top')
    }
    // 左操作
    case `${ActionTypes.LEFT_HANDLE}`: {
      return handlemove(state, 'left')
    }
    // 右操作
    case `${ActionTypes.RIGHT_HANDLE}`: {
      return handlemove(state, 'right')
    }
    default:
      return state;
  }
}
