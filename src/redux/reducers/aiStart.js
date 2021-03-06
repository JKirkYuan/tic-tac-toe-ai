import store from '../store';
import getInitialGame from '../../ai/getInitialGame';
import { askAiMove } from '../actions';

const aiStart = (oldGame) => {
  setTimeout(() => store.dispatch(askAiMove()), 2000);
  return getInitialGame(oldGame);
};

export default aiStart;
