import React from 'react'
import skill from "./data/skills.json";
import "./skills.css"


const Skills = () => {
  return (
   <>
   <div className="container skill">
    <h1>Skillls</h1>
    <div className="items" >
      {skill.map((data)=>{
        return(
     
        <div className="item" key={data.id}
          data-aos="flip-left"
    data-aos-duration="1000"
        
        >
           <img src={`/assets/${data.imageSrc}`} alt="" />
          <h3>{data.title}</h3>


        </div>
        
        
      
     

        )
      })}
    


    </div>

     
    

    </div>

  
    
   </>
  );
};

export default Skills
