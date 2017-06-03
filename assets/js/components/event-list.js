import { h, Component } from 'preact'
import data from '../data'

export default class EventList extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  getEvents(props) {
    this.setState({ events: [] })
    data.getTeamSeasonEvents('frc' + props.team, props.season).then(events => {
      this.setState({ events })
    })
  }

  componentWillReceiveProps(props) {
    this.getEvents(props)
  }

  componentWillMount() {
    this.getEvents(this.props)
  }

  render() {
    return (
      <ul class="events">
        {this.state.events.map(event => (
          <li><a href={`/event/${event.key}/${this.props.team}`}>{event.name}</a></li>
        ))}
      </ul>
    )
  }
}
