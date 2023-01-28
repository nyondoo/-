//store 전체를 총괄하는 모듈
import { combineReducers } from "redux";
import checkwork from "./modules/checkwork";

export default combineReducers({
    checkwork,
})