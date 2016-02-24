import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: [],
  todosById: {}
}

// Reducer Mapping //

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      action.todo = createTodo(action)
      break
  }

  return {
    todos: todos(state.todos, action),
    todosById: todosById(state.todosById, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

// Reducers //

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      if (VisibilityFilters[action.filter] !== 'undefined') {
        return action.filter
      }
    default:
      return state
  }
}

function todosById(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        [action.todo.id]: action.todo
      })
    case COMPLETE_TODO:
      let newState = Object.assign({}, state)
      newState[action.todo.id].completed = true
      return newState
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.todo.id
      ]
    default:
      return state
  }
}

// Helpers //

var uniqueId = 0;
function getUniqueId() {
  return uniqueId++;
}

function createTodo(action) {
  return {
    id: getUniqueId(),
    label: action.label,
    completed: action.completed || false
  }
}

export default todoApp
