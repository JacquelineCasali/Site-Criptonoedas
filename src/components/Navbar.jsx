import React , {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import "./Navbar.css"

export default function Navbar() {
// menu
const [click,setClick] =useState(false)
const handerClick=()=>setClick(!click)


    return (
    <div className='header'>
      <div className='container'>
        <h1>Cripto<span className='primary'>Moedas</span></h1>
        <ul className={click? 'nav-menu active':'nav-menu'}>
            <li>
     <a href="/">Home</a>        
                
            </li>
            <li>   <a href="/">
              Apresenta
                </a></li>

            <li>
            <a href="/">
                Ganhar</a></li>
            <li> <a href="/">
                Contato</a></li>
        </ul>
 <div className='btn-group'>
    <button className='btn'>Conectar Carteira</button>
 </div>
{/* botao responsivo */}
<div className='hamburger' onClick={handerClick}>
  {click ?(<FaTimes size={20} style={{color:'#333'}}/>) :<FaBars size={20} style={{color:'#333'}}/>}
</div>



      </div>
    </div>
  )
}
