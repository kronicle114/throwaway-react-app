import React from 'react'

export default function Item() {
    const text  = 'Example item'
    return (
        <div className="item">
            {text}
        </div>
    )
}

Item.defaultProps = {
    text: ''
}