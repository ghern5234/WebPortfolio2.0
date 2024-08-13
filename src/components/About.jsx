import React from 'react'
import javaScriptImage from '../assets/javascript.png'
import htmlImage from '../assets/HTML.png'
import graphQLImage from '../assets/graphQL.png' 
import expressImage from '../assets/express.png'
import reactImage from '../assets/react.png'
import cssImage from '../assets/css.png'
import nodeImage from '../assets/node.png'
import handlebarsImage from '../assets/handlebars.png'
import mongoDbImage from '../assets/mongodb.png'
import pgImage from '../assets/pg.png'

const About = () => {
    return (
     <>
      <div className='z-[1]'>
        
          <div className='bg-white rounded-md m-20 p-12'>
             <p className='m-4 indent-10'>
            Greetings! My name is George Hernandez based in Austin, Texas. Following my passion to become a full-stack software developer.
            I am a recent graduate of the UT Austin coding bootcamp, finishing out with a 90 GPA and honorary mentions.
            Looking for my first professional tech job and put my passion into practice!
            
            Some of the various languages and frameworks I studied are HTML, CSS, JavaScript, Express, Node, SQL, MongoDB, React, Handlebars, GraphQL, and Apollo.
            </p>
            <p className='m-4 indent-10'>
            
            In addition to my professional pursuits, I have a diverse range of hobbies. I am an avid tennis and pickleball player. I prioritize fitness with regular gym sessions. I enjoy any opportunity to travel, and have a keen interest in gaming.
            The proud dog dad of two lazy pugs and a hyperactive french bull dog.
            Compassion, honesty, and respect are the guiding principles in my personal and professional life. 
            Three of my greatest strengths are my communication skills, ability to quickly grasp new concepts, and work ethic.
            Having created and lead the development of multiple full-stack applicatons, I feel confident I would be an asset to any team or company. Excited at the opportunity to apply my learning and grow as a developer in industry! 
            Feel free to connect with me on Linked, checkout some of my work on GitHub, or send me an email!
             </p>
           </div>
      
          <div className='flex flex-row flex-wrap p-8 rounded-md m-8 justify-evenly' >
          <img src={javaScriptImage} width={200} height={250} className='rounded m-2'></img>

          <img src={cssImage} width={200} height={250} className='rounded m-2'></img>

          <img src={nodeImage} width={200} height={250} className='rounded m-2'></img>


          <img src={expressImage} width={200} height={250} className='rounded m-2'></img>

          <img src={reactImage} width={200} height={250} className='rounded m-2'></img>
</div>

<div className='flex flex-row flex-wrap p-8 rounded-md m-8 justify-evenly' >
          <img src={handlebarsImage} width={200} height={250} className='rounded m-2'></img>
     

          <img src={graphQLImage} width={200} height={250} className='rounded m-2'></img>

          <img src={mongoDbImage} width={200} height={250} className='rounded m-2'></img>

          <img src={pgImage} width={200} height={250} className='rounded m-2'></img>


          </div>
      </div>
      </>
    )
  }
  
  export default About
  