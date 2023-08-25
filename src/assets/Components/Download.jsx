import React from "react";
import "./../CSS/download.scss";
import Cv from './../Archive/Ruiz Diaz Javier A. CV.pdf'

const Download = () => {
  return (
    <>
      <div className="content download">
        <h3>CV PDF</h3>
        <div className="content-download">
          <div className="info-it ">
            <p>
            <i class="fa-solid fa-file"></i><span>Ruiz Diaz Javier A. CV</span>
            </p>
          </div>

          <div className="button-down">
            <a href={Cv} alt='descarga-pdf-cv' download>Descargar <i class="fa-solid fa-download"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
