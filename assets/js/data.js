const blueAllianceKey =
  'LoJOm03KhnZpPr4VwRlEVtEqsznYROuCcvCywMEJYuPqvUmGhkfpaVOUECiZqS1f'

export default new class Data {
  queryBlueAlliance(path) {
    return fetch(
      `https://www.thebluealliance.com/api/v3/${path}?X-TBA-Auth-Key=${blueAllianceKey}`
    ).then(d => d.json())
  }

  getCurrentYear() {
    return new Date().getFullYear()
  }

  getTeamSeasonEvents(team, year) {
    return this.queryBlueAlliance(`team/${team}/events/${year}/simple`)
  }

  getEventTeamMatches(event, team) {
    return this.queryBlueAlliance(`team/${team}/event/${event}/matches/simple`)
  }
}()
