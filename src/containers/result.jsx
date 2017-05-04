import React from 'react'
import { connect } from 'react-redux'
import Result from '../components/result'

function mapStateToProps(state) {
  return {
    originalText: state.reducer.originalText,
    cleanTextList: state.reducer.cleanTextList,
    emotion: state.reducer.emotion
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
