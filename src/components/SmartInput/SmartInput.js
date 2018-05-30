// USAGE: Most pass as props updateInput func and value. (no value = '')

import React, { Component } from 'react'

const SmartInput = (props) => {

    const handleInput = (e) => {
        const value = e.target.value;
        props.updateInput({ [props.id]: value })
    }

    return (
        <input type="text" onInput={handleInput} value={props.value} />
    )
}

export default SmartInput;