import React from 'react'
import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'

function ChangeAlert( { show, toggleShow, colorValue} ) {
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
        return <p>uwu</p>
    }
}

const ChangeAlertWithStorageListener = withStorageListener( ChangeAlert )

export { ChangeAlertWithStorageListener }