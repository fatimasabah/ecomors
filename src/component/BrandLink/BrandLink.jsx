import React from 'react'
import {
    BrowserRouter as Router,
     Switch,
     Route,
     Link
} from 'react-router-dom';
const BrandLink = ({classes}) =>  (
    
      <Link className= {`text-2xl font-krona ${classes}`} to="/">
                 wavey
      </Link>
    
  )


export default BrandLink
