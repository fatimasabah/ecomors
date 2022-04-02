import React from 'react'
import { NavLink } from 'react-router-dom'
import BrandLink from '../BrandLink/BrandLink'
import './navbar.css'
const Navbar = () => {
    return(
           <nav className = "container mx-auto font-krona flex justify-between py-3">
                {/* brand */}
                <BrandLink/>
                    
            <div className = "flex items-end">
            
                <NavLink activeClassName='text-yellow' className='text-sm mr-8' to="./home"> Home </NavLink>
                <NavLink activeClassName='text-yellow' className='text-sm mr-8' to="./search">Search</NavLink>
                <NavLink className='text-sm mr-8' to="./about">About</NavLink>

            {/* icons */}
            {/* TODO add colors */}
          <div className="flex icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
         </div>
      </div>
     </nav>
           
    )
}
export default Navbar