import React from 'react'
import { Link } from 'react-router-dom'

export default class Input extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    this.refs.submitButton.disabled = false
  }
  render() {
    return (
      <article>
        <Error isError = { this.props.isError } errorType = { this.props.errorType } originalText = { this.props.originalText } />
        <div className="ampstart-input inline-block relative m0 p0 mb3" style={{"minWidth": "100%"}}>
          <textarea name="text" id="text" ref="text" className="block p0 m0" rows="8" maxLength={ 1000 } onChange={ (e) => this.props.onChange(e.target.value) } defaultValue={ this.props.originalText } />
          <label htmlFor="text" className="top-0 right-0 bottom-0 left-0">
            伝えたいメッセージを入力してください。
          </label>
        </div>
        <div>
          <button className="ampstart-btn" ref="submitButton" onClick={ (e) => { e.target.disabled = true; this.props.onClick(this.refs.text.value, this.props.history) }}>送信する</button>
        </div>
      </article>
    )
  } 
}

class Error extends React.Component {
  render() {
    if (this.props.isError && this.props.errorType === 'api') {
      return (
        <article className="error">
          <p>APIの呼び出しに失敗しました。現在、サービスの利用ができない可能性があります。後日、改めてご利用をお願いします。</p>
        </article>
      )
    } else if (this.props.isError && this.props.errorType === 'input') {
      return (
        <article className="error">
          <p>入力内容に間違いがあります。入力が空になってはいませんか?</p>
        </article>
      )
    } else if (this.props.isError) {
      return (
        <article className="error">
          <p>原因不明のエラーが発生しました。現在、サービスの利用ができない可能性があります。後日、改めてご利用をお願いします。</p>
        </article>
      )
    }

    return null
  }
}