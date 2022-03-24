import React from 'react'
import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert( { colorValue, sincronize} ) {
    const {show, toggleShow} = useStorageListener(sincronize)
    if (show) {
        return (
            <div className='alertOfChange'>
                <div className={`message-box`}>
                    <p>Hubo un cambio desde otra pestaña</p>
                    <button
                        onClick={ () => {toggleShow(false)} }
                        className={`background-color-${colorValue}`}
                    >Recargar información</button>
                </div>
            </div>
        )
    }else {
        return null
    }
}

export { ChangeAlert }