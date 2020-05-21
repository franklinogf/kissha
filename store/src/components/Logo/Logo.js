import React from 'react'
import logo from "./logo.png"

export default function Logo() {
   return (
      <div>
         <img className="d-block mx-auto img-fluid" src={logo} alt='logo' /> 
      </div>
   ) 
}
