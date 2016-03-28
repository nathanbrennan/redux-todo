import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  render() {
    return (
      <div>
      <input ref="addTodoInput" />
      <button onClick={() => {
        let input = this.refs.addTodoInput
        this.props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
      Add Todo
      </button>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
