import { Navigate, Outlet } from "react-router-dom";

/**
 * Componente responsável por proteger as rotas internas do sistema.
 *
 * Ele verifica se existe um token salvo no localStorage.
 * Se existir, permite acessar a rota usando o <Outlet />.
 * Se não existir, redireciona o usuário para a tela de login.
*/
const PrivateRoute = () => {
    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />

}

export default PrivateRoute
