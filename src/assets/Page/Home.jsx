import React from 'react'
import './../CSS/home.scss'
import Head from './../Components/Head'
import Data from './../Components/Data'
import Education from '../Components/Education'

const Home = () => {
  return (
   <>
   <div className="container">
   <div className="left">
    <Head/> 
    <Data/>
   </div>
   <div className="right">
    <Education/>
   </div>

    
   
   </div>
   </>
  )
}

export default Home