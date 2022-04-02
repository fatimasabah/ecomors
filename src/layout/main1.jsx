import React from 'react'
import Navbar from '../component/navbar/navbar'
// import Footer from '../component/footer/Footer'
import Footer from './../component/footer/footer'
const Main = ({children}) => {
    return (
        <div > 
            
            <Navbar/>
            
            <div className="container mx-auto">
            {children}
            </div>

            <Footer/>
          
        </div>
    )
}
export default Main