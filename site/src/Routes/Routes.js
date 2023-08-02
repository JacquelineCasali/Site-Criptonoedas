import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

import Dasboard from "../pages/Dasboard";


// import Teste from "../Pages/Dasboard copy";


// import deletar from "../../pages/deletar/deletar";
const AppRoutes = () => {
  return (
    
<Router>
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/cadastro" element={<Cadastro/>}/>
  
        <Route exact path ="/dasboard" element={<Dasboard/>}/>
      
       
      
        {/* <Route  exact path="/teste" element={<Teste />} /> */}
      
        
        {/* <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/edit/:id" element={<Editar />} /> */} 
      </Routes>
    
      </Router>
   
  
  );
};
export default AppRoutes;
