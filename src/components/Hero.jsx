import React from 'react'
import Crypto from '../assets/hero-img.png'
import "./Hero.css"
export default function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        {/* lado esquerdo site */}
   
      <div className='left'>

     
     <p>
Compre e venda criptomoedas 24 horas por dia, 7 dias por semana, usando sua conta de aposentadoria</p>
                    <h1>
Invista em criptomoeda com seu IRA
                                          
                     </h1>
                    <p>Compre, venda e armazene centenas de criptomoedas</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Saber mais</button>
                    </div>
                </div>
                {/* lado dite */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>     
     
      </div>
    </div>
  )
}
