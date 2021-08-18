import { combineReducers } from "redux";
import DataReducer from '../Redux/DataReducer/DataReducer.reducer'

export const rootReducer=combineReducers({
    data:DataReducer,

})