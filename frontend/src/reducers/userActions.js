import { fetchWrapper, types } from "@reducers/common"
// import Cookies from 'js-cookie'

export const doFetchTasks = (dispatch, page=1, successChecker, errorChecker) => {
  console.log('fetching tasks')
  fetchWrapper(
    dispatch,
    'api/tasks/list',
    types.USER__ADD_TASKS,
    {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },
    successChecker
  ).then(errorChecker)
}