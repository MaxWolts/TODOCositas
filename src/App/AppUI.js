import React from "react";
import { TodoContext } from "../TodoContext";
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
import { TodoBackground } from "../TodoBackground"

function AppUI() {
    const {error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        colorValue,
        setColorValue,
        openModal,
        setOpenModal,
        flag,
    } = React.useContext(TodoContext);
    
    return (
    <TodoBackground>
        <Title/>
        <ColorButton/>
        <TodoContainer>
        <TodoCounter/>
        <TodoSearch />
            <TodoList>
                {error && <p> Desesperate, hubo un error </p>}
                {loading && <p> Estamos cargando owo </p>}
                {(!loading && !searchedTodos.length && flag===false) && <p> Crea tu primer todo </p>}
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
                <TodoForm/>
            </Modal>
        )}
        <CreateTodoButton
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    </TodoBackground>
    )
}
export { AppUI }