import react from "react";
import BrandLink from "../BrandLink/BrandLink";
import './footer.css'

const Footer = () => {
    const links = [
        'About',
        'scincare',
        'scincare',
        'scincare',
        'contact'

    ]
    return(
        // <div>
        <footer className="bg-dark text-light  flex justify-between px-4  py-4">
            {/* <div className="flex justify-between"> */}
            <BrandLink classes="text-yellow"/>
           
              <div className="flex items-center">
               {links.map(link => (
                   <a href="/" className="ml-4">{link}</a>
               ))
               }
           </div>
        {/* </div> */}
        
           {/* <p className="text-dark-gray text-sm">rect js project of fatima</p> */}
        </footer>

        // </div>
    )
}
export default Footer