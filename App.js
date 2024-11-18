
import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import  Aos from "aos";
import "aos/dist/aos.css"



const App = () => {

  useEffect(()=>{
    Aos.init();


  })
  return (
    <div>
      <Navbar/>
     <div className="container">
      <Home/>
      <Experience/> 
      <Skills/>
      <Projects/>
      <Contacts/>
      
      </div>
     
      
      
     


      
    </div>
  )
}

export default App

 
 


