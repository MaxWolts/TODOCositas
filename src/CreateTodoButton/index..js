import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext'

function CreateTodoButton(props) {
  const {colorValue} = React.useContext(TodoContext)
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  }
  return (
    <button 
      className='CreateTodoButton'
      onClick={onClickButton}
    >
      <span 
        className={`CreateTodoButton-color-${colorValue}`}
      >+</span> 
    </button>
  );
}

export { CreateTodoButton };