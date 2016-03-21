import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  return (
    <button
      onClick = {onClick}
      disabled = { active ? null : 'disabled' }
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
