import React from 'react'
import './../CSS/home.scss'
import Head from './../Components/Head'
import Data from './../Components/Data'
import Education from '../Components/Education'
import Download from '../Components/Download'
import Experiencia from '../Components/Experiencia'
import Skill from '../Components/Skill'
import Course from '../Components/Course'

const Home = () => {
  return (
   <>
   <div className="container">
   <div className="left">
    <Head/> 
    <Data/>
    <Download/>
    <Experiencia/>
   </div>
   <div className="right">
    <Education/>
    <Skill/>
    <Course/>
   </div>

    
   
   </div>
   </>
  )
}

export default Home