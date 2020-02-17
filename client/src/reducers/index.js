import { combineReducers } from 'redux'
import tweetReducer from './tweetReducer'
// import userReducer from './userReducer'

const rootReducer = combineReducers({
  tweet: tweetReducer
  // add user reducer
})

export default rootReducer