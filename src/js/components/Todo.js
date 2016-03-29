import React, { PropTypes } from 'react'

const Todo = ({onClick, completed, label}) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {label}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

export default Todo
