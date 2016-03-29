import { connect } from 'react-redux'
import { toggleTodoComplete } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todoIds, todosById, visibilityFilter) => {
  let todos = todoIds.map((id) => todosById[id])

  switch (visibilityFilter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
      break;
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todoIds, state.todosById, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodoComplete(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
