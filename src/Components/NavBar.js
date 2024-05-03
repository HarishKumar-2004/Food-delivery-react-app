import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"
import { StoreContext } from './AppContextProvider';

function NavBar(props) {

    const [item,setItem] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to='/'> <img src={process.env.PUBLIC_URL + '/logo.jpeg'} alt='' className='logo'/> </Link>
        <ul className='navbar-menu'>
            <Link to="/" onClick={() => setItem("home")} className={item==="home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setItem("menu")} className={item==="menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setItem("mobile-app")} className={item==="mobile-app" ? "active" : ""}>Mobile-app</a>
            <a href='#footer' onClick={() => setItem("contact")} className={item==="contact" ? "active" : ""}>Contact us</a>
        </ul>

        <div className='navbar-right'>
            <img src={process.env.PUBLIC_URL + '/search_icon.png'} alt='' ></img>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={process.env.PUBLIC_URL + '/basket_icon.png'} alt=''/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={() => props.setShowLogin(true)}>Sign in</button>
        </div>  
    </div>
  )
}

export default NavBar
