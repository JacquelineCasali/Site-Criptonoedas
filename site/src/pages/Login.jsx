import React ,{useState}  from 'react'
import {Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import authService from '../services/authservice';
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import '../styles/Login-Cadastro.css'
import icone from "../assets/x.png"

// estilo de alerta
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
 
 // formatação de alerta
 const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "green",
  
  };
  // navegação 
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
     //validaça
     const handleValidation = () => {
     
      if (email === "" || email===null) {
        // campo nao pode ser vazio
        toast.error("Por favor, preencha seu email", toastOptions);
        return false;
          
      } else if (password < 4) {
        toast.error("A senha precisa de no mínio de 4 dígitos", toastOptions);
        return false;
      } 
      return true;
    };
     
  const ProceadLogin= async(e)=>{
    e.preventDefault();
    if (handleValidation()) {
   
    const data={email: email,  password: password}
  // console.log("data",data);
  try{
  let res =await authService.authenticate(data)
  console.log('res',res.data)
  authService.setLoggedUser(res.data)
  navigate("/dasboard")
  
  }catch(error){
    console.log(error) }
  
  }
  }

    return (
  
   <div className='login'>
     <HelmetProvider>
        <Helmet title="Login" />
      </HelmetProvider>

      <div className='container'>

        {/* lado esquerdo site */}
   
      <div className='center'>
      <Link className='icone' to={'/'} >   
       <img  src={icone}  alt="Logo"/></Link>
    
      
       <h1 className='titulologin' >Login </h1>
          
       <form onSubmit={ProceadLogin} >
       <div className="form-group">
                  
                        {/* <div style={{display:'flex'}}>
                        <img src={Union} alt="Logo" className="imagelogin  "  />  */}
                        <input 
                         type="email"           id="email" 
                            placeholder="Email"
                         value={email}
                         onChange={e=>setEmail(e.target.value)} 
                            ></input>
                           
                  
                        <input 
                        style={{marginBottom:"10px"}}
                            type="password" 
                            id="password" 
                            placeholder="Password"
                          value={password}
                          onChange={e=>setPassword(e.target.value)}
                                                   />
                         
                         </div>
                       
                        <Link className="senha" to={'#'}  style={{color:'#5D6670'}}
                  >
                   Esqueceu a Senha?    </Link> 
       
                    <button  className="btn-login-cadastro">Login</button>
                </form>
   
    <Link  className="senha"  to={'/cadastro'} >
    Não possui conta?<strong >  Cadastre-se</strong>  

    </Link>
    

            </div>
            <ToastContainer toastStyle={{ backgroundColor: "crimson" }}  /> 

        </div>

        </div>

  )
}
