import React from 'react'
import { fromJS } from 'immutable'


export const userInitialState = fromJS({
  username: null,
  email: null,
  tasks: {},
})

export const userReducer = (state={}, action) => {
  console.log('reducer-stages', action)

  switch(action.type){
    default:
      return state
  }
}
