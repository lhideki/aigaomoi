import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import ReactGA from 'react-ga'

import Config from './config'
import reducer from './reducers/reducer'
import Input from './containers/input'
import Confirm from './containers/confirm'
import Result from './containers/result'

const config = new Config()

ReactGA.initialize(config.googleAnalyticsUa())

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    middleware
  )
)
history.listen((location, action) => {
  ReactGA.pageview(location.pathname)
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Input} />
        <Route exact path="/error" component={Input} />
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/result" component={Result} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
