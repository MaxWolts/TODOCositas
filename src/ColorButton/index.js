import React from 'react';
import { TodoContext } from '../TodoContext'
import './ColorButton.css';

function ColorButton() {
  const {colorValue, setColorValue} = React.useContext(TodoContext)
  return (
    <div className='ColorButtonContainer' >
      <button 
        className={`ColorButton color-${colorValue}`}
      ></button>
      <button 
        className="ColorButton color-yellow"
        onClick={ ()=> {setColorValue('yellow')} }
      ></button>
      <button 
        className="ColorButton color-pink"
        onClick={ ()=> {setColorValue('pink')} }
      ></button>
      <button 
        className="ColorButton  color-blue"
        onClick={ ()=> {setColorValue('blue')}}
      ></button>
    </div>
  );
}

export { ColorButton };

