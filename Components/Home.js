import React from 'react'
import "./Home.css"
import resume from "../pdf/Nikhil__Resume.pdf"
import { useEffect,useRef } from 'react'


const Home = () => {
 

 


  return (
    <div className='container home'>
      <div className="left"  data-aos="fade-up-right"
    data-aos-duration="1000">
        <h1>
          Welcome to My Portfolio<br></br></h1>
         <h2> My Name is Nikhil Dhiman<br></br></h2>
         <h3 className='text'> I am a Front End Developer</h3>
         
        <a href={resume} download={resume} className='btn btn-outline-warning'>Download Resume</a>
      </div>
     
  
    </div>
  )
}

export default Home
