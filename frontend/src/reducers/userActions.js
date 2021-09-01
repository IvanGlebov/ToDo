import {fetchWrapper, types} from "@reducers/common"
// import Cookies from 'js-cookie'

export const doFetchTasks = (dispatch, page = 1, successChecker, errorChecker) => {
  console.log('fetch tasks')
  fetchWrapper(
    dispatch,
    'api/tasks/list',
    types.USER__ADD_TASKS,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },
    successChecker
  ).then(errorChecker)
}

export const addTask = (dispatch, name, description, successChecker, errorChecker) => {
  fetchWrapper(
    dispatch,
    'api/tasks/add',
    undefined,
    {
      method: 'POST',
      body: {
        'name': name,
        'description': description
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },
    successChecker
  ).then(errorChecker)
}