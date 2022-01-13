import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/index.';
import { ColorButton } from '../ColorButton';
import { Title } from '../Title';
import { TodoContainer } from '../TodoContainer';
import './App.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
    return (
    <div className='TODO'>
        <Title/>
        <ColorButton />
        <TodoContainer>
        <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>
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

        <CreateTodoButton />
    </div>
    )
}
export { AppUI }