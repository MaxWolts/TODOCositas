import React from 'react';

import './ColorButton.css';

function ColorButton({colorValue, setColorValue}) {

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

