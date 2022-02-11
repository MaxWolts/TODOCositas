import React from "react";
import './TodosLoading.css'
function TodosLoading() {
    return (
    <div className="LoadingTodo-contaner">
        <button type='checkbox' className="LoadingTodo-complete"></button>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className="LoadingTodo-deleteIcon">X</span>
    </div>
    );
}
export { TodosLoading };