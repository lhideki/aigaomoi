import React from 'react'
import { connect } from 'react-redux'
import Input from '../components/input'
import { confirmForSubmit, changeInput } from '../actions/action'

function mapStateToProps(state) {
  return {
    originalText: state.reducer.originalText,
    isError: state.reducer.isError,
    errorType: state.reducer.errorType
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (text, history) => { dispatch(confirmForSubmit(text, history)) },
    onChange: (text) => { dispatch(changeInput(text)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
