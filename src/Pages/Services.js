//Services.js, Adam La Selva, 301488626, and 2024-09-27
import React from 'react'; //imports react 

function Services() {
    return (
          //id gets the correct css from app.css to apply   
          //HTML Structure section 
        <div id="services">
        <h1>My Services</h1>
          
        <div>
            {/* 1st service  image and description*/}
            <img 
                src={`${process.env.PUBLIC_URL}/assets/backenddev.png`} 
                alt="Project 1" 
                style={{ width: '300px', height: '200px' }} 
            />
            <p>Backend Systems Engineering</p>
        </div>

        <div>
           {/* 2nd service  image and description*/}
            <img 
                src={`${process.env.PUBLIC_URL}/assets/vfxstf.png`} 
                alt="Project 2" 
                style={{ width: '300px', height: '200px' }} 
            />
            <p>Game Design</p>
        </div>

        <div>
            {/*  3rd service  image and description*/}
            <img 
                src={`${process.env.PUBLIC_URL}/assets/genprogramming.png`} 
                alt="Project 3" 
                style={{ width: '300px', height: '200px' }} 
            />
            <p>General Programming</p>
        </div>
    </div>
);
}

export default Services;
