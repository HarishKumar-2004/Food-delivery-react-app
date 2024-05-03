import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse range of cuisines and restaurants featuring an array of delicious dishes crafted with perfection.</p>
            <a href='#explore-menu'> <button>View menu</button> </a>
        </div>
    </div>
  )
}

export default Header
