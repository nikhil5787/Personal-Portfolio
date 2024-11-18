import React from 'react'
import "./Contact.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <div className='container contact'

    
    >
   <h1>Contacts</h1>
   <div className="icons"
     data-aos="zoom-in-up"
    data-aos-duration="1000"
   
   >
    <div className="icon-item">
      <FaGithub className='icon'/>
    </div>
    <div className="icon-item">
      <FaLinkedin className='icon'/>
    </div>
   
    <div className="icon-item">
      <SiGmail className='icon'/>
    </div>
   

   </div>
      
    </div>
  )
}

export default Contacts
