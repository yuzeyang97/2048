import ActionTypes from '../const/ActionTypes';

const initState = {
  btns: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, 0], [0, 2, 0, 0]],
  score: 1000,
  bestScore: 2000,
  title: '2048',
  description: "Keypressing 'W S A D' on PC. Touch moving on Phone."
};

export default function (state = initState, action) {
  switch (action.type) {
    case `${ActionTypes.INIT_HANDLE}`: {
      const newState = { ...state };
      // const { btns, score } = newState;
      const random1 = Math.random() * 4;
      const random2 = Math.random() * 4;
      const random3 = Math.random() * 4;
      const random4 = Math.random() * 4;
      Math.floor(random1);
      Math.floor(random2);
      Math.floor(random3);
      Math.floor(random4);
      console.log(random1, random2, random3, random4);
      return newState;
    }
    default:
      return state;
  }
}
