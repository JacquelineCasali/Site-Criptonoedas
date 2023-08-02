import React ,{useState}  from 'react'
import axios from "axios"
import {Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import '../styles/Login-Cadastro.css'
import icone from "../assets/x.png"

// estilo de alerta
import "react-toastify/dist/ReactToastify.css";

export default function Cadastro() {
 
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
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
    // validação da senha
    const handleValidation = () => {
      const { password, confirmPassword, name, email } = values;
      if (password !== confirmPassword) {
        // console.log("validation", toast);
        toast.error("Senha e Confirme a senha devem ser iguais", toastOptions);
        return false;
      } else if (name === "") {
        //campo nao pode ser vazio
        toast.error("Por favor, preencha seu nome", toastOptions);
        return false;
      } else if (password < 4) {
        toast.error("A senha precisa de no mínio de 4 dígitos", toastOptions);
        return false;
      } else if (email === "") {
        // campo nao pode ser vazio
        toast.error("Por favor, preencha seu email", toastOptions);
        return false;
      }
      return true;
    };
    const handleSubmit = async (e) => {
      // intercepitação do evento
      e.preventDefault();
  
      console.log("validation");
       if (handleValidation()) {
      //   // conectar banco de dados
     
      // axios.post("http://localhost:8000/cadastros", values)
      axios.post('https://login-tfod.onrender.com/cadastros', values)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  
       
        const { name, email, password } = values;
        const { data } = await axios.post("https://login-tfod.onrender.com/cadastros", {
          name,
          email,
          password,
        });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem(
            "Cadastro",
            // process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data.user)
          );
          navigate("/login");
        }
      }
    };
  
    return (
  
   <div className='login'>
     <HelmetProvider>
        <Helmet title="Cadastro" />
      </HelmetProvider>

      <div className='container'>

        {/* lado esquerdo site */}
   
      <div className='center'style={{margin:' 24px 0 0 0 '}}>
      <Link className='icone' to={'/'} >   
       <img  src={icone}  alt="Logo"/></Link>
    
      
       <h1 className='titulologin' >Cadastro </h1>
          
       <form onSubmit={handleSubmit} >
       <div className="form-group">

       <input  
          type="text"
          placeholder="Nome "
          name="name"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
     />


                        {/* <div style={{display:'flex'}}>
                        <img src={Union} alt="Logo" className="imagelogin  "  />  */}
                        <input 
                         type="email"        
                          id="email" 
                            placeholder="Email"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}

                          />
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            />
<input
        style={{marginBottom:'10px'}} 
       type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
        />
                           </div>
                                         
                    <button  className="btn-login-cadastro">Login</button>
                </form>
   
    <Link  className="senha"  to={'/login'} >
    Ja possui conta?<strong > Fazer Login </strong>  

    </Link>
    

            </div>
            <ToastContainer toastStyle={{ backgroundColor: "crimson" }}  /> 

        </div>

        </div>

  )
}
