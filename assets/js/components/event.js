import { h, Component } from 'preact'
import data from '../data'

export default class Event extends Component {
  constructor() {
    super()
    this.state = {
      matches: []
    }
  }
  componentWillMount() {
    data
      .getEventTeamMatches(this.props.event, 'frc' + this.props.team)
      .then(matches => this.setState({ matches }))
  }
  render() {
    return (
      <div class="event">
        <h1>Event</h1><h2>{`${this.props.team} at ${this.props.event}`}</h2>
        <ul class="matches">
          {this.state.matches.map(match => (
            <li>{`${match.key} at ${match.predicted_time}`}</li>
          ))}
        </ul>
      </div>
    )
  }
}
