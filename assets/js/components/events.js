import { h, Component } from 'preact'
import data from '../data'
import SeasonSelector from './season-selector'
import TeamSelector from './team-selector'
import EventList from './event-list'

export default class Events extends Component {
  constructor() {
    super()
    this.state = {
      season: data.getCurrentYear(),
      team: 1,
      events: []
    }
  }

  render() {
    return (
      <div class="events">
        <h1>Events</h1>
        <SeasonSelector
          season={this.state.season}
          onChange={season => this.setState({ season })}
        />
        <TeamSelector
          team={this.state.team}
          onChange={team => this.setState({ team })}
        />
        <EventList team={this.state.team} season={this.state.season}/>
      </div>
    )
  }
}
