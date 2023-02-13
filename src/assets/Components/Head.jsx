import React from 'react'
import './../CSS/header.scss'
import Foto from './../Img/foto.jpeg'

const Head = () => {
  return (
    <div className="content section-head">
        <div className="cont-photo">
          <div className="avatar">
            <img src={Foto} alt="foto" />
          </div>
          <div className="info">
            <h1>Ruiz Diaz Javier Alejandro.</h1>
            <span>Analista en Sistemas e Información</span>
            <span>Desarrollador Frontend</span>
          </div>
        </div>
        <div className="button">
          <a href="https://www.linkedin.com/in/javier-alejandro-ruiz-diaz/" target='_blank'><i class="fa-brands fa-linkedin"></i> Linkedin</a>
        </div>
    </div>
  )
}

export default Head