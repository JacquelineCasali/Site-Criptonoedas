import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Page from "../pages/Page";

const AppRoutes = () => {
  return (
    
<Router>
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/cadastro" element={<Cadastro/>}/>
  
        <Route exact path ="/moedas" element={<Page/>}/>
    
      </Routes>
    
      </Router>
   
  
  );
};
export default AppRoutes;
