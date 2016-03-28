import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

ReactDOM.render (
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

// import {
//   addTodo,
//   completeTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './actions'
//
// console.log(store.getState())
//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about stores'))
// store.dispatch(completeTodo(0))
// store.dispatch(completeTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
// unsubscribe()
