import React from 'react'
import Escuela from './../Img/EPES.jpg'
import Terciario from './../Img/macedo.jpg'
import Facultad from './../Img/utn.jpeg'
import './../CSS/education.scss'

const Education = () => {
  return (
    <>
     <div className="section container-edu">
        <h3>Educación</h3>
        <div className="content-edu">
            <img src={Escuela} alt="escuela" />
            <div className="description-edu">
                <span>EPES N9 "Dr. Vicente Lopez y Planes" - Palo Santo - FSA</span>
                <span>Economía y gestión de las organizaciones</span>
            </div>
            
        </div>
        <div className="fechaS">Diciembre 2010</div>
        <div className="content-edu">
            <img src={Terciario} alt="escuela" />
            <div className="description-edu">
                <span>Instituto Superior Privado Robustiano Macedo Martinez</span>
                <span>Analista en Sistemas e Información</span>
            </div>
            
        </div>
        <div className="fechaS">Diciembre 2013</div>
        <div className="content-edu">
            <img src={Facultad} alt="escuela" />
            <div className="description-edu">
                <span>Universidad tecnológica nacional Facultad regional resistencia</span>
                <span>Ing. en Sistemas de información</span>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Education