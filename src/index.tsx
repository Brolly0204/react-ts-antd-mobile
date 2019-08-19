import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import history from './store/history'
import App from './containers/App'
// import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
