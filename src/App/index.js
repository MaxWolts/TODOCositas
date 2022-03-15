import React from 'react';
import { useTodos } from './useTodos'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/index.';
import { ColorButton } from '../ColorButton';
import { Title } from '../Title';
import { TodoContainer } from '../TodoContainer';
import { Modal } from '../Modal'
import './App.css';
import { TodoForm } from "../TodoForm";
import { TodoBackground } from "../TodoBackground";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader';




function App() {
  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    flag,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    colorValue,
    addTodo,
    setColorValue
} = useTodos();

return (
  <TodoBackground 
      colorValue={colorValue}
  >
      <Title/>
      <ColorButton
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
      <TodoContainer
        colorValue={colorValue}
      >
          <TodoHeader>
              <TodoCounter
                  totalTodos={totalTodos}
                  completedTodos={completedTodos}
              />
              <TodoSearch
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
              />
          </TodoHeader>
          <TodoList>
              {error && <TodosError error={error}/>}
              {loading && <TodosLoading/>}
              {(!loading && !searchedTodos.length && flag===false) && <EmptyTodos/>}
              {(!loading && flag === true && !searchedTodos.length) && <p> No hay resultados </p>}
              {searchedTodos.map(todo => (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={()=> {
                  completeTodo(todo.text)
                  }}
                  onDelete={()=> {
                  deleteTodo(todo.text)
                  }}
              />
              ))}
          </TodoList>
      </TodoContainer>
      {!!openModal && (
          <Modal>
              <TodoForm
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                  colorValue={colorValue}
              />
          </Modal>
      )}
      <CreateTodoButton
          openModal={openModal}
          setOpenModal={setOpenModal}
          colorValue={colorValue}
      />
  </TodoBackground>
  )
}

export default App;