import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = React.useState("Login")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder= 'Your name' required></input>}
          <input type="email" placeholder='Your Email'required ></input>
          <input type="password" placeholder='Password'required ></input> 
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required></input>
          <p>by contnuing, i agree to the terms and condition of use & privacy policy</p>
        </div>

      </form>
      
    </div>
  )
}

export default LoginPopup
