import React from 'react'
import Navbar from './Navbar'

import { Routes, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

const Apptwo = () => {
    return (
        <div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />
            </Switch>


            {/* 
      <Routes>
          <Route  exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/service' element={<Service/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
      </Routes> */}

        </div>
    )
}

export default Apptwo
