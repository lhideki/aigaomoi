import React from 'react'
import { Link } from 'react-router-dom'

export default class Confirm extends React.Component {
  propTypes: {
    originalText: React.PropTypes.string.isRequired,
    cleanTextList: React.PropTypes.list.isRequired
  }
  componentWillReceiveProps(nextProps) {
    console.debug('update')
  }
  componentWillUpdate(nextProps, nextState) {
    console.debug(nextState)
    if (nextState === 'SEND') {
      console.log('send')
    }
  }
  render() {
    window.props = this.props
    return (
      <article>
        <div className="p2 border m0 mt2">
          { this.props.cleanTextList.map((t, i) => {
            return <p key={i}>{t}</p>
          })
          }
        </div>
        <div className="pt4">
          <p className="mb2">文章の分析を開始します。よろしいですか?</p>
          <button className="ampstart-btn mr4" onClick={ (e) => { e.target.disabled = true; this.props.onSubmit(this.props.originalText) }}>OK</button>
          <Link className="ampstart-btn" to="/">やめる</Link>
        </div>
      </article>
    )
  }
}