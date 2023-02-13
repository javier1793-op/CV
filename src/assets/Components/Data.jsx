import React from 'react'
import './../CSS/data.scss'

const data = () => {
  return (
    <>
    <div className="content data-info">
        <h3>Información Personal</h3>
        <div className="contact">
        <div className="info-it ">
                          
                          <p><i class="fa-solid fa-envelope"></i> <span>javier17utn@gmail.com</span></p>
                          <p className='descriptionP'>Email</p>
                        </div>
                        <div className="info-it ">
                          <p><i class="fa-solid fa-phone"></i> <span>+54 3704264610</span></p>
                        <p className='descriptionP'>Celular</p>
                        
                        </div>
                        <div className="info-it ">
                          <p><i class="fa-solid fa-cake-candles"></i>  <span>11 Marzo 1993</span></p>
                            <p className='descriptionP'>Nacimiento</p>
                        </div>
                        <div className="info-it ">
                          <p><i class="fa-solid fa-user"></i> <span>Soltero</span></p>
                            <p className='descriptionP'>Estado civil</p>
                        </div>
        </div>
        <div className="location">
        <div className="info-it ">
                          <p><i class="fa-solid fa-location-dot"></i> <span>Resistencia - Chaco</span></p>
                            <p className='descriptionP'>Ubicación</p>
                        </div>
        </div>
    </div>
    </>
  )
}

export default data