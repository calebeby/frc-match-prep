import { h } from 'preact'
import data from '../data'

export default (props, state) => (
  <label>
    Team
    <input
      type="number"
      value={props.team || 1}
      min="1"
      onChange={e => {
        if (props.onChange) {
          props.onChange(e.target.value)
        }
      }}
    />
  </label>
)
