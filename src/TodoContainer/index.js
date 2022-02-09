import React from 'react'
import './TodoContainer.css'
import { TodoContext } from '../TodoContext'

function TodoContainer(props) {
    const {colorValue} = React.useContext(TodoContext)
    return (
        <div className={`TodoContainer backgroundContainer-${colorValue}`}>
            {props.children}
        </div>
    )
}

export { TodoContainer }