//store 전체를 총괄하는 모듈
import { combineReducers } from 'redux';
import checkWork from './modules/checkwork';
import switchView from './modules/switchview';

export default combineReducers({
  checkWork,
  switchView,
});
