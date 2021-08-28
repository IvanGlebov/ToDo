import React from 'react'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { userInitialState, userReducer } from './userReducer'

export const history = createBrowserHistory()

const buildMiddleware = () => {
  // noinspection JSUnresolvedVariable
  const middleware = [
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ]
  return middleware
}

export default createStore(
  combineReducers({
    user: userReducer,
    router: connectRouter(history)
  }),
  {
    user: userInitialState
  },
  compose.apply(null, buildMiddleware())
)
