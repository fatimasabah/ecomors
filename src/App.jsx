import React from 'react'
import Main from './layout/main1'
import {
    BrowserRouter as Router,
     Switch,
     Route,
    //  Link
} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './pages/Home';
import About from './pages/About';

export default function App(){
  return(
    <Router>
      <Switch>
        <Route path='/about'>
          <Main>
            <About/>
          </Main>
        </Route>
        <Route path='/'>
          <Main>
            <Home/>
          </Main>
        </Route>
      </Switch>
    </Router>
  )
}