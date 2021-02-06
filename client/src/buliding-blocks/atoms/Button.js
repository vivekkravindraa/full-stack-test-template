import React from 'react'

export default function Button({ title, handleBtnClickRef }) {
    return (
        <button onClick={(e) => handleBtnClickRef(e)}>{title}</button>
    )
}
