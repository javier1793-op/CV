import React from "react";
import "./../CSS/skill.scss";

const Skill = () => {
  return (
    <>
      <div className="section skill">
        <h3>Skills</h3>
        <div className="content-skill">
            <a href="https://github.com/javier1793-op" target='_blank'>
                <div className="linkgit">
            <i class="fa-brands fa-github"></i>
            <span>Github</span>
          </div>
            </a>
          
          <div className="etiquetas">
            <div className="miniaturas">
              <i class="fa-brands fa-react"></i>
              <span>React</span>
            </div>
            <div className="miniaturas">
              <i class="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
            <div className="miniaturas">
            <i class="fa-brands fa-sass"></i>
              <span>scss</span>
            </div>
            <div className="miniaturas">
            <i class="fa-brands fa-square-js"></i>
              <span>Javascript</span>
            </div>
            <div className="miniaturas">
            <i class="fa-brands fa-wordpress"></i>
              <span>Wordpress</span>
            </div>
            <div className="miniaturas">
            <i class="fa-brands fa-node-js"></i>
              <span>Nodejs</span>
            </div>
            <div className="miniaturas">
            <i class="fa-solid fa-database"></i>
              <span>Mysql</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
