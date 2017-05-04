import React from 'react'
import { connect } from 'react-redux'
import Confirm from '../components/confirm'
import { fetchResult } from '../actions/action'

function mapStateToProps(state) {
  return {
    originalText: state.reducer.originalText,
    cleanTextList: state.reducer.cleanTextList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (originalText) => { dispatch(fetchResult(originalText)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
