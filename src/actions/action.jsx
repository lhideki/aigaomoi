import { push } from 'react-router-redux'

export const confirmForSubmit = (text, history) => {
  if (!text || text === '') {
    history.push('/error')
    return {
      type: 'ERROR_INPUT',
      text
    }
  }
  history.push('/confirm')

  return {
    type: 'CONFIRM',
    text
  }
}

export const changeInput = text => {
  return {
    type: 'CHANGE',
    text
  }
}

export const sendRequest = text => {
  return {
    type: 'SEND',
    text
  }
}

export const showResult = emotion => {
  return {
    type: 'RESULT',
    emotion
  }
}

export const showErrorApi = res => {
  return {
    type: 'ERROR_API',
    res
  }
}

const url = 'http://localhost:8000/emotioncheck'

export const fetchResult = (originalText) => {
  return dispatch => {
    dispatch(sendRequest)

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
        text: originalText 
      })
    })
    .then(r => {
      if (!r.ok) {
        dispatch({
          type: 'ERROR_API',
          data: r
        })
        dispatch(push('/'))

        return null
      }

      return r.json()
    })
    .then(r => {
      const emotion = {
        magnitude: r.magnitude,
        score: r.score
      }
      dispatch(showResult(emotion))
      dispatch(push('/result'))
    })
    .catch(() => {
      console.error('API call error.')
    })
  }
}