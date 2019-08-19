import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import homeReducer from './home'
import history from '../history'

export default combineReducers({
  counter: counterReducer,
  home: homeReducer,
  router: connectRouter(history),
})
