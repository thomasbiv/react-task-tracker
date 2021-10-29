import React from 'react'
import Button from './Button'

const Header = (props) => {
    const addAction = () => {
        console.log("*add button functionality*")
    }
    
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button title = 'Add' onClick = {addAction}/>
        </header>
    )
}

export default Header
