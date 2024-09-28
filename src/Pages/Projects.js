//Projects.js, Adam La Selva, 301488626, and 2024-09-27
import React from 'react';

function Projects() {
    return (
        //HTML Structure section
        ///id gets the correct css from app.css to apply   
        <div id="projects">
            <h1>My Projects</h1>

            <div>
                {/* 1st project image and description*/}
                <h2>Project 1</h2>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/backenstuf.png`} 
                    alt="Project 1" 
                    style={{ width: '300px', height: '200px' }} 
                />
                <p>Backend developer for a MMORPG-style game that I am solo developing in my free time.</p>
            </div>

            <div>
                {/* 2nd project image and description*/}
                <h2>Project 2</h2>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/somevfx.png`} 
                    alt="Project 2" 
                    style={{ width: '300px', height: '200px' }} 
                />
                <p>Primary developer of a VFX workplace to showcase my work.</p>
            </div>

            <div>
                {/* 3rd project image and description*/}
                <h2>Project 3</h2>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/frog.png`} 
                    alt="Project 3" 
                    style={{ width: '300px', height: '200px' }} 
                />
                <p>Developer of voxel-style mobs for a game.</p>
            </div>
        </div>
    );
}

export default Projects;
