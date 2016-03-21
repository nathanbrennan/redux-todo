// Action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Visibility Filters
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

// Action Creators
export function addTodo(label) {
  return { type: ADD_TODO, label }
}

export function toggleTodoComplete(id) {
  return { type: TOGGLE_TODO_COMPLETE, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
