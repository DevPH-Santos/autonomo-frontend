import { BrowserRouter, Routes, Route } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

import MainLayout from "../components/layout/MainLayout"

import Dashboard from "../pages/Dashboard/Dashboard"
import Clientes from "../pages/Clientes/Clientes"
import Atendimentos from "../pages/Atendimentos/Atendimentos"
import Produtos from "../pages/Produtos/Produtos"
import Pagamentos from "../pages/Pagamentos/Pagamentos"
import Despesas from "../pages/Despesas/Despesas"

import Login from "../pages/Auth/Login"
import Cadastro from "../pages/Auth/Cadastro"

/**
 * Componente responsável por centralizar todas as rotas da aplicação.
 *
 * Ele separa as rotas em dois grupos principais:
 *
 * 1. Rotas públicas:
 *    - Login
 *    - Cadastro
 *
 *    Essas rotas podem ser acessadas por usuários que ainda não estão logados.
 *
 * 2. Rotas privadas:
 *    - Dashboard
 *    - Clientes
 *    - Atendimentos
 *    - Produtos
 *    - Pagamentos
 *    - Despesas
 *
 *    Essas rotas só podem ser acessadas quando existe um token salvo,
 *    indicando que o usuário passou pela autenticação.
 */
const AppRoutes = () => {
  return (
    /**
     * BrowserRouter habilita o sistema de rotas no navegador.
     * Ele permite navegar entre páginas sem recarregar a aplicação inteira.
     */
    <BrowserRouter>
      <Routes>
        {/**
         * Grupo de rotas públicas.
         *
         * O PublicRoute decide se o usuário pode acessar login/cadastro.
         * Caso o usuário já esteja autenticado, ele pode ser redirecionado
         * para o dashboard.
         */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>

        {/**
         * Grupo de rotas privadas.
         *
         * O PrivateRoute verifica se existe um token de autenticação.
         * Se não existir token, o usuário é redirecionado para /login.
         */}
        <Route element={<PrivateRoute />}>
          {/**
           * MainLayout é o layout padrão da área interna do sistema.
           *
           * Todas as rotas dentro dele usam a mesma estrutura visual,
           * como navbar lateral e área principal de conteúdo.
           */}
          <Route path="/" element={<MainLayout />}>
            {/**
             * Rota inicial da área logada.
             *
             * Quando o usuário acessa "/", o React Router renderiza
             * o Dashboard dentro do <Outlet /> do MainLayout.
             */}
            <Route index element={<Dashboard />} />

            {/**
             * Rotas internas do sistema.
             *
             * Como estão dentro do MainLayout, todas aparecem com
             * a estrutura padrão da aplicação logada.
             */}
            <Route path="clientes" element={<Clientes />} />
            <Route path="atendimentos" element={<Atendimentos />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="pagamentos" element={<Pagamentos />} />
            <Route path="despesas" element={<Despesas />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes