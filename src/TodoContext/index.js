import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider (props) {
  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', [])
  const {
    item: color,
    saveItem: setColorValue,
    loading: loadingColor,
    error: errorColor,
  } = useLocalStorage('COLOR_VALUE', 'blue')
  let flag = false
  const [searchValue, setSearchValue] = React.useState('')
  // const [color, setColor] = React.useState('blue')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos
    flag = false
  } else {
    flag = true
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text )
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text )
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  
  const changeColor = (color) => {
    setColorValue(color)
    document.querySelector('#root').style.background =`var(--${color})`
    document.querySelector('.TodoContainer').style.background = `var(--gray-${color})`
    document.querySelector('.CreateTodoButton').firstChild.style.background = `var(--${color})`
  }
  return (
      <TodoContext.Provider value={{
          error,
          loading,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          addTodo,
          completeTodo,
          deleteTodo,
          colorValue: color,
          setColorValue: changeColor,
          openModal,
          setOpenModal,
          flag
      }}>
          {props.children}
      </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }