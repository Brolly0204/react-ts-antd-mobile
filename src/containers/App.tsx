import * as React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Mime from './Mime'
import Profile from './Profile'
import Tab from '../components/Tab'

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/mime" component={Mime} />
        <Route path="/profile" component={Profile} />
        <Tab />
      </React.Fragment>
    )
  }
}

export default App
