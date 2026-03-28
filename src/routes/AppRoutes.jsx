import { BrowserRouter, Routes, Route } from "react-router-dom"; //biblioteca de rotas


import React from 'react'
import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard"
import Clientes from "../pages/Clientes/Clientes"
import Atendimentos from "../pages/Atendimentos/Atendimentos"
import Produtos from "../pages/Produtos/Produtos"
import Pagamentos from "../pages/Pagamentos/Pagamentos"
import Despesas from "../pages/Despesas/Despesas"

const AppRoutes = () => {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={<MainLayout/>}>
            
                <Route index element={<Dashboard/> }/>
                <Route path="clientes" element={<Clientes/>}/>
                <Route path="atendimentos" element={<Atendimentos/>}/>
                <Route path="produtos" element={<Produtos/>}/>
                <Route path="pagamentos" element={<Pagamentos/>}/>
                <Route path="dispensas" element={<Despesas/>}/>

            </Route>

        </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes