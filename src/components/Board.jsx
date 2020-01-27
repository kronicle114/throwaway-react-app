import React from 'react'
import List from './List'

export default function Board() {
    return (
        <div className="board">
            <h2>Example board</h2>
            <ul className="lists">
                <li className="list-wrapper">
                    <List />
                </li>
                <li className="list-wrapper">
                    <List />
                </li>
                <li className="list-wrapper">
                    <List />
                </li>
            </ul>
        </div>
    )
}

/* ====
one way to vary the output of a component is through its props. Props are short for properties and they behave much the same way that a attribute does for an html tag. They are passed from the outside (parent component).

in stateful components, instead of props being passed as an argument to the render method, it is accessed through this.props.txt. whereas functional components you call props as props.txt


A component can have as many props as you set it to. When you want a prop to have a default value, you can use defaultProps attribute
*/