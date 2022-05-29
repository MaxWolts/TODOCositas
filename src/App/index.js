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
import { ChangeAlert } from '../ChangeAlert'

function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    colorValue,
  } = states;

  const {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setColorValue,
    setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <TodoBackground colorValue={colorValue}>
      <Title />
      <ColorButton colorValue={colorValue} setColorValue={setColorValue} />
      <TodoContainer colorValue={colorValue}>
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>

        <TodoList
          searchText={searchValue}
          totalTodos={totalTodos}
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => (
            <p> No hay resultados para {searchText} </p>
          )}
          render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);
              }}
            />
          )}
        />
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
      <ChangeAlert sincronize={sincronizeTodos} colorValue={colorValue} />
    </TodoBackground>
  );
}

export default App;