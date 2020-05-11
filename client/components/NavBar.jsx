/**
 * ************************************
 *
 * @module  NavBar.jsx
 * @author
 * @date
 * @description manages navbar application
 *
 * ************************************
 */

 import React from 'react'
 import { Link } from 'react-router-dom'

 const NavBar = () => {
   return (

    <nav className="frontnav">
        <nav className="leftnav">
          <span className="navlink"><Link to="/">GREEN THUMB</Link></span>
          <span className="navlink"><Link to="/signup">Sign Up</Link></span>
          <span className="navlink"><Link to="/query">Make a query</Link></span>
          <span className="navlink"><Link to="/plantshelf">Plantshelf</Link></span>
        </nav>
        <nav className="rightnav">
          <input className="login" type="text" placeholder="Username" required />
          <input className="login" type="text" placeholder="Password" required />
          <button className="login">Login</button>
          
        </nav>
      </nav>
     )
 }

 export default NavBar;