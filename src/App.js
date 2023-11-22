import './styles.css';
import React from 'react'
import Perfil from "./images/perfil.png"
import Linkedin from "./images/icone-linkedin-azul.png"
import Github from "./images/icone-github.png"
import Youtube from"./images/icone-youtube.png"
import {BiEnvelope} from "react-icons/bi";

function App() {
  return (
    <div className='main'>
        
      <div className='conteinerProfile'>
  
        <img className='perfil' src={Perfil}/>
        <h1 className='title'>Guilherme Luis A. C. Felex</h1>
        <h2  className='Subtitle'>Developer RPA at Biti9 - Business It Innovation</h2>
        
        <div className='conteiner'>

            <div className='conteinerlinks'>
              <a href='https://github.com/GuilhermeFelex' target="_blank">
                <div className='icons'>
                  <img src={Github} className='icongithub'/>
                </div>
                <p>GitHub</p>
              </a>
            </div>

          
            <div className='conteinerlinks'>
              <a href='https://www.linkedin.com/in/guilhermefelex/'  target="_blank">
                <div className='icons'>
                  <img src={Linkedin} className='iconlinkedin'/>
                </div> 
                <p>Linkedin</p>
              </a>
            </div>

            <div className='conteinerlinks'>
              <a href='https://youtube.com/@FelexTech-hk6mi' target="_blank">
                <div className='icons'>
                  <img src={Youtube} className='iconyoutube'/>
                </div>
                <p>YouTube</p>
              </a>
            </div>

            <div className='conteinerlinks'>
              <a href='https://drive.google.com/drive/u/1/folders/1yNQfaOhD4hhTRL9UukccwH5DllaBLD9P' target="_blank">
                <div className='icons'>
                 
                </div>
                <p>Certificados</p>
              </a>
            </div>

        </div>

        <a target='_blank' href='mailto:guilherme.felex@hotmail.com' className='email'> 
          <BiEnvelope size={35} color="#fff"/>
        </a>

      </div>
     
    </div>
  );
}

export default App;
