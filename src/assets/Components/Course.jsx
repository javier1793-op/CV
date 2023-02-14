import React from 'react'
import './../CSS/course.scss'

const Course = () => {
  return (
    <>
    <div className="section course">
    <h3>Cursos</h3>
        <div className="content-course">
          <div className="etiquetas">
            <div className="miniaturas">
              <span>React</span>
            </div>
            <div className="miniaturas">
              <span>Javascript</span>
            </div>
            <div className="miniaturas">
              <span>Flexbox</span>
            </div>
            <div className="miniaturas">
              <span>Grid</span>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Course