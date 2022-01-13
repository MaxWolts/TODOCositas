import React from 'react';
import './ColorButton.css';

function ColorButton() {
  let [color, setColor] = React.useState('blue')
  const seeColors = (color) => {
    setColor(color)
    document.querySelector('#root').style.background =`var(--${color})`
    document.querySelector('.TodoContainer').style.background = `var(--gray-${color})`
    document.querySelector('.CreateTodoButton').firstChild.style.background = `var(--${color})`
  }
  return (
    <div className='ColorButtonContainer' >
      <button 
        className={`ColorButton color-${color}`}
      ></button>
      <button 
        className="ColorButton color-blue"
        onClick={ ()=> {seeColors('blue')} }
      ></button>
      <button 
        className="ColorButton color-pink"
        onClick={ ()=> {seeColors('pink')} }
      ></button>
      <button 
        className="ColorButton color-yellow"
        onClick={ ()=> {seeColors('yellow')}}
      ></button>
    </div>
  );
}

export { ColorButton };

