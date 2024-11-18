import React from 'react'
import "./Navbar.css" 



const Navbar = () => {
  return (
    <div className='container'
    data-aos="fade-down"
    data-aos-duration="1000"
    >
        <nav>
            <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>Experience</li></a>
               <a href=""><li>Skills</li></a>
                <a href=""><li>Projects</li></a>
                <a href=""><li>Contacts</li></a>

            </ul>


        </nav>
       
      
    </div>
  )
}

export default Navbar
