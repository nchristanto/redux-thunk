import { combineReducers } from "redux"
import todoReducer from "./todoReducer"

const rootReducers = combineReducers({
  todo: todoReducer
})

export default rootReducers; 