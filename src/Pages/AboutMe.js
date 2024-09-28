//AboutMe.js, Adam La Selva, 301488626, and 2024-09-27

import React from 'react';

function AboutMe() {
    return (
        // html section
        <div style={{ textAlign: 'center', padding: '20px' }}  id="about">
            <h1>About Me</h1>
            
          
            <img 
                src={`${process.env.PUBLIC_URL}/assets/adam_4733.jpg`} 
                alt="Adam La Selva" 
                style={{ width: '200px', borderRadius: '50%', margin: '20px 0' }} 
            />
            
           {/* info block about me c:*/}
            <p>
                Hi! My name is <strong>Adam La Selva</strong>. 
                I am a passionate game developer specializing in backend systems Engineering 
                with skills in frontend VFX development as well. I primarily use Unreal Engine 5 and sometimes use Unity.
                I create my 3D models in Blender and make art/VFX in Clip Studio Paint. 
                My goal is to further improve my skills in video game development and explore other game engines. 
                Outside of coding, I enjoy snowboarding and practicing my art skills.
            </p>
            
           {/* resume download block*/}
            <a 
            //I dont currently have a tech work resume so I left the link part here for when I do have one, but currently it leads to nothing 
                href="resume path" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none', color: 'blue' }}
            >
                Download My Resume
            </a>
        </div>
    );
}

export default AboutMe;
