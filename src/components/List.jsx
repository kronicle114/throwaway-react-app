import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

export default function List() {
  const items = []
  for (let i=0; i < 3; i++){
    items.push(
      <li>
        <Item/>
      </li>
    )
  }
    return (
        <article>
          <ul className="list">
            {items}
          </ul>
        </article>
    )
}

/* https://github.com/facebook/prop-types#usage */
Item.propTypes = {
  text: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
}