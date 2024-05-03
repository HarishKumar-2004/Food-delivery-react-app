import React, { useState } from 'react'
import "./Login.css"

function Login(props) {

    const [currentState,setCurrentState] = useState("Login");

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currentState}</h2>
                <img onClick={() => props.setShowLogin(false)} src={process.env.PUBLIC_URL + "/cross_icon.png"} alt=''></img>
            </div>
            <div className='login-popup-inputs'>
                {currentState==="Login" ? <></> : <input type='text' placeholder='Your name' required />}
                <input type='email' placeholder='Your email' required />
                <input type='password' placeholder='Enter Password' required />
            </div>
            <button>{currentState==="Sign up" ? "Create Account" : "Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login" ? <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>C1ick here</span></p> 
            : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>}
        </form>  
    </div>
  )
}

export default Login
