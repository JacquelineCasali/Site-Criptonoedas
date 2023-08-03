import React from 'react'
import "../styles/Singup.css"
import Crypto from '../assets/trade.png'
import { Link } from 'react-router-dom'

export default function Singup() {
  return (
    <div className='signup'>
    <div className='container'>
      {/* lado esquerdo site */}
 <div className='left'>
    <img src={Crypto} alt="" />
 </div>
    <div className='right'>
                
    <h2>Ganhe renda passiva com criptomoeda</h2>
                    <p>
                    Ganhe até 12% de recompensas anuais em mais de 30 ativos digitais. Basta manter seus ativos no aplicativo para ganhar recompensas automaticamente no final de cada mês, sem bloqueios e sem limites.</p>
                    <button className='btn'>
                    <Link  to="/moedas" > Ver mais moedas
     </Link>
                 </button>
              </div>
              </div>   </div>
     )
}
