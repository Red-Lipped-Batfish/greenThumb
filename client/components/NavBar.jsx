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

     <nav>
     <ul className="frontnav">
       <li>
         <Link to='/query'>Query</Link>
       </li>
       <li>
         <Link to='/plantshelf'>Plant Shelf</Link>
       </li>
       <li>
         <Link to='/profile'>Profile</Link>
       </li>
     </ul>
   </nav>
     )
 }

 export default NavBar;