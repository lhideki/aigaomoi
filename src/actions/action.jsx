import { push } from 'react-router-redux'
import Config from '../config'

const config = new Config()
const url = config.apiUrl()

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

export const fetchResult = (originalText) => {
  return dispatch => {
    dispatch(sendRequest)

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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
    .catch((e) => {
      console.error('API call error.')
      dispatch({
        type: 'ERROR_API',
        data: e
      })
      dispatch(push('/error'))
    })
  }
}