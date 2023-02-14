import React from 'react'
import './../CSS/experiencia.scss'
import Bios from './../Img/bios-logo.png'
import Aula from './../Img/biosit.png'
import Alkemy from './../Img/alkemylogo.png'

const Experiencia = () => {
  return (
    <>
        <div className="content experiencia">
           <h3>Experiencia</h3>
           <div className="content-exp">
           <img src={Bios} alt="trabajo-tecnico" />
            <div className="description-trabajo">
                <span>BIOS Informática  - Resistencia Chaco</span>
                <span>Técnico encargado del sector reparación y servicio</span>
                <span>Diseñador y desarrollador de página web ecommerce</span>
                <div className="button-page">
                <a href="https://biosonline.com.ar/" alt='pagina-biosinformatica' target='_blank'><i class="fa-solid fa-page"></i>Ir a Página</a>
                </div>
            </div>
           </div>
           <div className="content-exp">
           <img src={Aula} alt="trabajo-tecnico" />
            <div className="description-trabajo">
                <span>Bios-it centro de e-learning</span>
                <span>Creación y diseño de aula virtual moodle</span>
                <span>Diseñador y desarrollador de página educativa</span>
                <div className="button-page">
                <a href="https://www.bios-it.com.ar/aulabiosit/" alt='aulavirutal-biosit' target='_blank'><i class="fa-solid fa-page"></i>Ir a Página</a>
                </div>
            </div>
           </div>
           <div className="content-exp">
           <img src={Alkemy} alt="trabajo-tecnico" />
            <div className="description-trabajo">
                <span>Capacitación programador Junior NODEJS – Alkemy</span>
                <span>Desarrollo sistema de eventos para ONG.</span>
            </div>
           </div>
        </div>
    </>
  )
}

export default Experiencia