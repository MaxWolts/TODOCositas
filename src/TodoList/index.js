import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      <ul>
        { props.error && props.onError() }
        { props.loading && props.onLoading() }
        { ( !props.loading && !props?.searchedTodos.length && !props.totalTodos ) && props.onEmptyTodos() }
        { ( !props.loading && props.totalTodos && !props.searchedTodos.length ) && props.onEmptySearchResults(props.searchText) }
        { props.searchedTodos.map(props.render) }
      </ul>
    </section>
  );
}

export { TodoList };