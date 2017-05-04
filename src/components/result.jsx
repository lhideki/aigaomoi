import React from 'react'
import { Link } from 'react-router-dom'

export default class Result extends React.Component {
  propTypes: {
    cleanTextList: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <article>
        <div className="p2 border m0 mt2">
          {
            this.props.cleanTextList.map((t, i) => {
              return <p key={i}>{t}</p>
            })
          }
        </div>
        <Emotion emotion={this.props.emotion} />        
        <div className="pt4">
          <Link className="ampstart-btn" to="/">トップに戻る</Link>
        </div>
      </article>
    )
  }
}

class Emotion extends React.Component {
  render () {
    let pos = 0
    const score = this.props.emotion.score

    if (score <= -1) {
      pos = -4
    } else if (score < -1 && score <= -0.75) {
      pos = -4
    } else if (score < -0.75 && score <= -0.5) {
      pos = -3
    } else if (score < -0.5 && score <= -0.25) {
      pos = -2
    } else if (score < -0.25 && score <= 0) {      
      pos = -1
    } else if (score === 0) {
      pos = 0
    } else if (score >= 0  && score < 0.25) {
      pos = 1
    } else if (score >= 0.25  && score < 0.5) {
      pos = 2
    } else if (score >= 0.5  && score < 0.75) {
      pos = 3
    } else if (score >= 0.75  && score < 1) {
      pos = 4
    } else if (score >= 1) {
      pos = 4
    }

    const width = 100 / 11 + '%'

    return (
      <div>
        <p></p>
        <ul className="flex flex-wrap pl0 emotion-progress list-reset">
          <li className="icon is-negative items-center" style={{ width: width }}>悲</li>
          {
            [-4, -3, -2, -1, 0, 1, 2, 3, 4].map((t, i) => {
              const levelClass = 'level' + i
              if (pos === t) {
                return <li className={ levelClass + ' flex flex-column is-active' } key={i} style={{ width: width }}>{ this.props.emotion.score }</li>
              } else {
                return <li className={ levelClass + ' flex flex-column' } key={i} style={{ width: width }} >&nbsp;</li>
              }
            })
          }
          <li className="icon is-positive items-center" style={{ width: width }}>愛</li>
        </ul>
      </div>
    )
  }
}