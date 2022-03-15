import React from 'react'
import './TodoContainer.css'

function TodoContainer(props) {
    return (
        <div className={`TodoContainer backgroundContainer-${props.colorValue}`}>
            {props.children}
        </div>
    )
}

export { TodoContainer }