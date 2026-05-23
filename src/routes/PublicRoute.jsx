import { Navigate, Outlet } from "react-router-dom";

/**
 * Componente responsável por controlar as rotas públicas.
 *
 * Se o usuário já estiver autenticado, ele não precisa ver login/cadastro.
 * Nesse caso, mandamos direto para o dashboard.
*/
const PublicRoute = () => {
    const token = localStorage.getItem("token")

    if (token) {
        return <Navigate to="/" replace />
    }

    return <Outlet />

}

export default PublicRoute
