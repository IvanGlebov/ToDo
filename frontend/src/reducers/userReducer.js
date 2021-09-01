import React from 'react'
import {fromJS} from 'immutable'
import {types} from "@reducers/common";


export const userInitialState = fromJS({
  username: null,
  email: null,
  tasks: [],
  query: {
    total: 0,
    pages: 0,
    currentPage: 0
  }
})

export const userReducer = (state = {}, action) => {
  console.log('reducer-stages', action)

  switch (action.type) {
    case types.USER__ADD_TASKS:
      return state
        .mergeDeepIn(['tasks'], fromJS(action.tasks))
        .set('query', fromJS({
          total: action.total,
          pages: action.pages,
          currentPage: action.page,
        }))


    default:
      return state
  }
}
