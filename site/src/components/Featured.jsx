import React, { useEffect, useState } from 'react'
import "../styles/Featured.css"

// inportando icones 
import {FiArrowUpRight, FiArrowDown} from "react-icons/fi"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Featured() {

// conectando a api 
const [data , setData]=useState(null)
const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'
// rota de leitura 
useEffect (()=>{
axios.get(url)
.then((response)=>{
    setData(response.data)
console.log(data)
}).catch((error)=>{
    console.log(error)})
},[])
if(!data) return null

  return (
    <div className='featured'>
    <div className='container'>
      {/* lado esquerdo site */}
 
    <div className='left'>
                
    <h2>Explore as principais criptomoedas como Bitcoin, Ethereum e Dogecoin
        </h2>
                    <p>
Veja todos os ativos disponíveis: Criptomoedas e NFT's</p>
                    <button className='btn'>
                    <Link  to="/moedas" > Ver mais moedas
     </Link>

                        </button>
                 
              </div>
              {/* lado dite */}
              <div className='right'>
              <div className='card'>
                        <div className='top'>
                   
                         <img src={data[0].image} alt='' />
                        </div>
            
<div>
    <h5>{data[0].name}</h5>
    <p>${data[0].current_price.toLocaleString()}</p>
  

    </div>
{/* <span><FiArrowUpRight/>2.5%</span> */}
{/* condicional de cor  */}
{data[0].price_change_percentage_24h < 0 ?(
    <span className='red'><FiArrowDown/>
    {data[0].price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'><FiArrowUpRight/>
    {data[0].price_change_percentage_24h.toFixed(2)}%
    </span>
)} 
           </div>     
              <div className='card'>
                        <div className='top'>
                   
                         <img src={data[1].image} alt='' />
                        </div>
         
<div>
    <h5>{data[1].name}</h5>
    <p>${data[1].current_price.toLocaleString()}</p>
  

    </div>
{/* <span><FiArrowUpRight/>2.5%</span> */}
{/* condicional de cor  */}
{data[1].price_change_percentage_24h < 0 ?(
    <span className='red'><FiArrowDown/>
    {data[1].price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'><FiArrowUpRight/>
    {data[1].price_change_percentage_24h.toFixed(2)}%
    </span>
)} 
           </div>     
              <div className='card'>
                        <div className='top'>
                   
                         <img src={data[2].image} alt='' />
                        </div>
            
<div>
    <h5>{data[2].name}</h5>
    <p>${data[2].current_price.toLocaleString()}</p>
  

    </div>
{/* <span><FiArrowUpRight/>2.5%</span> */}
{/* condicional de cor  */}
{data[2].price_change_percentage_24h < 0 ?(
    <span className='red'><FiArrowDown/>
    {data[2].price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'><FiArrowUpRight/>
    {data[2].price_change_percentage_24h.toFixed(2)}%
    </span>
)} 
           </div>     
              <div className='card'>
                        <div className='top'>
                   
                         <img src={data[3].image} alt='' />
                        </div>
            
<div>
    <h5>{data[3].name}</h5>
    <p>${data[3].current_price.toLocaleString()}</p>
  

    </div>
{/* <span><FiArrowUpRight/>2.5%</span> */}
{/* condicional de cor  */}
{data[3].price_change_percentage_24h < 0 ?(
    <span className='red'><FiArrowDown/>
    {data[3].price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'><FiArrowUpRight/>
    {data[3].price_change_percentage_24h.toFixed(2)}%
    </span>
)} 
           </div>     

              <div className='card'>
                        <div className='top'>
                   
                         <img src={data[4].image} alt='' />
                        </div>
            
<div>
    <h5>{data[4].name}</h5>
    <p>${data[4].current_price.toLocaleString()}</p>
  

    </div>
{/* <span><FiArrowUpRight/>2.5%</span> */}
{/* condicional de cor  */}
{data[4].price_change_percentage_24h < 0 ?(
    <span className='red'><FiArrowDown/>
    {data[4].price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'><FiArrowUpRight/>
    {data[4].price_change_percentage_24h.toFixed(2)}%
    </span>
)} 
           </div>     

              <div className='card'>
                        <div className='top'>
                   
                         <img src={data[5].image} alt='' />
                        </div>
            
<div>
    <h5>{data[5].name}</h5>
    <p>${data[5].current_price.toLocaleString()}</p>
  

    </div>
{/* <span><FiArrowUpRight/>2.5%</span> */}
{/* condicional de cor  */}
{data[5].price_change_percentage_24h < 0 ?(
    <span className='red'><FiArrowDown/>
    {data[5].price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'><FiArrowUpRight/>
    {data[5].price_change_percentage_24h.toFixed(2)}%
    </span>
)} 
           </div>     
              </div>
              </div>  

              </div> 

  )
}