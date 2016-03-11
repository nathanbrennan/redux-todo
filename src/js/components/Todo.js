import React, { PropTypes } from 'react'

const Todo ({onClick, completed, text}) => (
  <li
    onclick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: ProptTypes.func.isRequired,
  completed: ProptTypes.bool.isRequired,
  text: ProptTypes.string.isRequired
}

export default Todo
