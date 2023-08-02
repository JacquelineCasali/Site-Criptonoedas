import React from 'react'
import { FaFacebook, FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'
import "../styles/Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='col col-1'>
        <h1>Cripto<span className='primary'>Moedas</span></h1>
        </div>
        <div className='col'>
            <h5>Suport</h5>
            <span className='bar'></span>
                <a href="">Contato</a>
                <a href="">Chat</a>
                <a href="">Ajuda</a>
                <a href="">Faq</a>
           
        </div>

        <div className='col'>
            <h5>Developers</h5>
            <span className='bar'></span>
                <a href="">Cloud</a>
                <a href="">Commerce</a>
                <a href="">Pro</a>
                <a href="">Api</a>
           
        </div>

        <div className='col'>
            <h5>Empresa</h5>
            <span className='bar'></span>
                <a href="">Sobre</a>
                <a href="">Informação</a>
                <a href="">Legal</a>
                <a href="">Privacidade</a>
          
        </div>


        <div className='col'>
            <h5>Social</h5>
            <span className='bar'></span>
                <a href="https://www.facebook.com/"><FaFacebook className='icon'/></a>
                <a href="https://twitter.com/">
                    <FaTwitter className='icon'/>
                </a>
                <a href="https://www.linkedin.com/">
                    <FaLinkedin className='icon'/>
                </a>
                <a href="https://github.com/">
                    <FaGithub className='icon'/>
                </a>
       
        </div>


      </div>
    </div>
  )
}
