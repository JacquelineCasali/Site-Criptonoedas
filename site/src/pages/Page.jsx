import React, { useEffect, useState } from "react";
// chamando o banco de dados
import axios from "axios";
// chamando titulo da pagina
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/Page.css"

import Footer from "../components/Footer"
import {FiArrowUpRight, FiArrowDown} from "react-icons/fi"
import Navbar from "../components/Navbar";


const Page = ()=>{
 
    // tabela cripto 
// conectando a api
      const [criptos, setCriptos]=useState([])
      const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
    
      useEffect(()=>{
        // axios.get('http://localhost:8000/cripto')
        axios.get(url)
        .then((response)=>{
            console.log(response)
            setCriptos(response.data)})
             .catch((err)=>console.log(err))
         },[])
    return(
      <div className="page" >
<HelmetProvider>
      <Helmet title="Tabela de CrptoMoedas " />
      </HelmetProvider>
      <Navbar/> 
     {/*  tabela */}
    
    
     <section>
        {/* lado esquerdo site */}
   
     <h1 className="titulo">Top Cryptos</h1>
    
    <table  >
       <thead  >
          <tr>
   
              <th>#</th>            
              <th></th>            
        
         <th>Crypto</th>
              <th>Price</th>
              <th>Change</th>
               <th  style={{padding:'0 15px 0 85px'}} >Trade</th>                  
         </tr>
         
        </thead>
       <tbody>
        {criptos.map((c, i) => {
            return (
              // style={{verticalAlign:'middle'}}
           <tr className="linha" key={i}  >
                <td>  {c.market_cap_rank}</td>
                <td style={{width:"5px", Padding:"0"  }}>
               <img className="icones_banco" src={c.image}></img> 
                               </td>
              <td>{c.name}</td>
              <td>US$ {c.current_price.toLocaleString()}</td>
                            <td> 
{/* condicional de cor  */}
{c.price_change_percentage_24h < 0 ?(
    <span className='red'>  <FiArrowDown/>
    {c.price_change_percentage_24h.toFixed(2)}%
    </span>
) : (
    <span className='green'>  <FiArrowUpRight/> 
      {c.price_change_percentage_24h.toFixed(2)}%
    </span>
)} 


               </td>
              
                <td  style={{width:"25%"}}>
              <button className="botao-comprar">
              <Link
                      //  to={`/${c.id}`}
                    
         >
                       Comprar
                     </Link>
                
              </button >
                   <button className="botao-vender" > 
                   <Link
                      //  to={`/${c.id}`}
                       
                    >
                       Vender
                     </Link>
                
                   </button>
                   
 </td>
              </tr>
           );
          })}
        </tbody>
      </table>
      <Link 
      // to={}
                       className="ler-mais"
                   >
                      View more +
                     </Link>

       

    
     
     </section>
     <Footer/>
     </div>
  
     




    )
}
export default Page