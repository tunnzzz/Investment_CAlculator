import React from 'react'
import logo from '../Assets/investment-calculator-logo.png'

function Header() {
    return (
        <header id='header'>
            <img src={logo} alt='logo that defines the app' />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header
