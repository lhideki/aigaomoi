import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Switch, IndexRoute } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers/reducer'
import Input from './containers/input'
import Confirm from './containers/confirm'
import Result from './containers/result'

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
