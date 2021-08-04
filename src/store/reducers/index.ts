import { combineReducers } from "redux";
import {tickerReducer} from "./tickerReducer";


const reducers = combineReducers({
    tickerState: tickerReducer
})

export default reducers