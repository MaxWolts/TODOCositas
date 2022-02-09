import React from 'react'
import './TodoBackground.css'
import { TodoContext } from '../TodoContext'


function TodoBackground(props) {
    const {colorValue} = React.useContext(TodoContext)
    return (
        <section className={`TodoBackground backgroundColor-${colorValue}`}>
            {props.children}
        </section>
    )
}

export { TodoBackground }