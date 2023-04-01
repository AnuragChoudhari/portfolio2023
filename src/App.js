import './App.css';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import React, {useEffect, useState} from 'react';
import Back from './components/Back';
import Footer from './components/Footer';


function App(){
  useEffect( () => {
    console.log("This is called using useEffect!");
  })
  return(
    <>
      <div className="app-container">

           <Back></Back> 

        {/* <HeroSection></HeroSection> */}
        <About></About>
        <Works></Works>
        <Services></Services>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;