import React from 'react'
import './TodoBackground.css'


function TodoBackground(props) {
    return (
        <section className={`TodoBackground backgroundColor-${props.colorValue}`}>
            {props.children}
        </section>
    )
}

export { TodoBackground }