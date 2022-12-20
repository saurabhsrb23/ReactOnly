import React from 'react'
import './header.css'

const Header = () => {
    return (
        <>
            <nav className='header'>
                <section className='logo'>
                    <img src={require("../../images/logo-ig-png-32469.png")} alt="logo" />
                </section>
                <section className="cameraLogo">
                    <img src={require("../../images/insta.png")} alt="logo" />
                </section>
            </nav>
        </>
    )
}

export default Header