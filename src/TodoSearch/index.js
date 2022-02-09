import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  
  return (
    <input 
      className="TodoSearch" 
      placeholder="Busca un TODO"
      value={searchValue}
      onChange={onSearchValueChange}
      key={'search'}
    />
  )
}
export { TodoSearch };