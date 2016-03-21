import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibilityFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
      break;
    case SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibilityFilter(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect({
  mapStateToProps,
  mapDispatToProps
})(TodoList)

export default VisibleTodoList
