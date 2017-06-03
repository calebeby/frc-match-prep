import { h, Component } from 'preact'
import Router from 'preact-router'
import Events from './events'
import Event from './event'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Events path="/" />
        <Event path="/event/:event/:team"/>
      </Router>
    )
  }
}
