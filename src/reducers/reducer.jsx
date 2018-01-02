const initialState = {
  originalText: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CONFIRM': {
      state.cleanTextList = state.originalText.split('\n')
      state.isError = false
      
      return state
    }
    case 'CHANGE': {
      state.originalText = action.text

      return state
    }
    case 'SEND': {
      state.isProcessing = true

      return state
    }
    case 'ERROR_INPUT': {
      state.originalText = action.text
      state.isError = true
      state.errorType = 'input'

      return state
    }
    case 'ERROR_API': {
      state.res = action.data
      state.isError = true
      state.errorType = 'api'

      return state
    }
    case 'RESULT': {
      state.isProcessing = false
      state.cleanTextList = state.cleanTextList
      state.emotion = action.emotion
      state.isError = false

      console.debug(state.emotion)
      
      return state
    }
    default:
      return state
  }
}