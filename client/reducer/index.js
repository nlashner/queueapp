import {combineReducers} from 'redux'
import userReducer from './user'
import tracksReducer from './tracks'

const appReducer = combineReducers({
  user: userReducer,
  tracks: tracksReducer
})

export default appReducer
