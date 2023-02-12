import React from 'react'
import './../CSS/header.scss'

const Head = () => {
  return (
    <div className="content section-head">
        <div className="cont-photo">
          <img src="#" alt="foto" />
          <div className="info">
            <h1>Ruiz Diaz Javier Alejandro.</h1>
            <span>Analista en Sistemas e Información</span>
            <span>Desarrollador Frontend</span>
          </div>
        </div>
        <div className="button">
          <a href="https://www.linkedin.com/in/javier-alejandro-ruiz-diaz/">icono / Linkedin</a>
        </div>
    </div>
  )
}

export default Head