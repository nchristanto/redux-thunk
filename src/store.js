import {
  createStore, 
  applyMiddleware, 
  compose
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}
const middleware = [thunk]

const store = createStore(
  // after rootReducer setup
  rootReducer,
  initialState, 
  compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__() // ini adalah nama variable
  ) 

)

export default store