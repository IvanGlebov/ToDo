import fetch from 'cross-fetch'

export const types = {
  USER__REPORT_ERROR: 'USER__REPORT_ERROR'
}

export const reportError = (error) => {
  let msg = error && error.message || error

  try {
    return { type: types.USER__REPORT_ERROR, error: JSON.parse.msg }
  } catch (e) {
    return { type: types.USER__REPORT_ERROR, error: msg }
  }
}

export const fetchWrapper = (dispatch, url, event, opts, successChecker) => {
  // console.log(`fetching ${url}`)
  return fetch(url, opts)
    .then(res => {
      if (res.status >= 400)
        throw new Error(JSON.stringify(res.json()))
      else
        return res.json()
    })
    .then(res => {
      if (!successChecker || successChecker(res)) {
        if (event !== undefined) {
          dispatch((typeof event === 'string') ? { type: event, ...res } : event(res))
        } else {
          dispatch(reportError(res))
        }
      } else {
        dispatch(reportError(res))
      }
    })
    .catch(error => dispatch(reportError((error))))
}
