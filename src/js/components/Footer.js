import React from 'react'
import FilterLink from '../components/FilterLink'

const Footer = () => (
  <div>
    <FilterLink filter="SHOW_ALL">All</FilterLinke>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLinke>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLinke>
  </div>
)

export default Footer
