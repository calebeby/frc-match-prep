import { h } from 'preact'
import data from '../data'

export default (props, state) => (
  <label>
    Season
    <input
      type="number"
      value={props.season || data.getCurrentYear()}
      min="1992"
      max={data.getCurrentYear()}
      onChange={e => {
        if (props.onChange) {
          props.onChange(e.target.value)
        }
      }}
    />
  </label>
)
