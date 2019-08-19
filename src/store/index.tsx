import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import reducer from './reducer'
import history from './history'

const store = createStore(reducer, applyMiddleware(routerMiddleware(history), thunk, logger))

export default store
