import React from 'react'
import "./Experience.css"
import experience from "./data/experience.json"

const Experience = () => {
  return (
    <>
    <div className=" container exp ">
      <h1>Experience</h1>
      {
        experience.map((data)=>{
          return( 
            <>
            <div key={data.id}className='experience text-center'
              data-aos="zoom-in"
    data-aos-duration="1000"
            
            >
              <div className="left">

              </div>
            <div className='right'> 
              <h2>{data.role}</h2>
              <span style={{color: "yellow"}}>
              <h5>{data.startDate}{" "}{data.endDate}{" "}{data.location}</h5>
              <h6>{data.experiences[0]}</h6>
              <h6>{data.experiences[1]}</h6></span>
              


            </div>

            </div>
            </>


          )


        })



      }
    
    </div>
    
    
    </>
  )
}

export default Experience
