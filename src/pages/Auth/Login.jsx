import "./Auth.css"
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService"


const Login = () => {

    const navigate = useNavigate()

    /**
     * Função executada quando o formulário de login é enviado.
     *
     * Ela impede o recarregamento padrão da página, pega os dados
     * digitados no formulário, chama o backend e salva o token recebido.
    */
    async function handleLogin(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const email = formData.get("email")
        const senha = formData.get("senha")

        try {
            const resposta = await login(email, senha)

            localStorage.setItem("token", resposta.token)
            localStorage.setItem("usuario", JSON.stringify(resposta.usuario))

            navigate("/")
        } catch (error) {
            alert(error.message)
        }

    }

    return (
        <>

            <div className="main-form-auth">

                <div className="header-form-auth">

                    <div>

                        <img src="" alt="" />
                        <h1>Autonomo+</h1>

                    </div>

                    <p>Sistema Gerenciador de lucro</p>

                </div>

                <form onSubmit={handleLogin} className="form-auth" id="form-login">

                    <div className="form-header">

                        <h2>Entrar</h2>
                        <p>Acesse sua conta para continuar.</p>

                    </div>

                    <div className="campos">

                        <div className="campo">

                            <label htmlFor="userEmail">EMAIL</label>
                            <input type="email" name="email" id="userEmail" required placeholder="e-mail@exemplo.com" />

                        </div>

                        <div className="campo">

                            <div className="esqueciSenhaDiv">

                                <label htmlFor="userPassword">SENHA</label>
                                <a href="#">Esqueci minha senha</a>

                            </div>
                            <input type="password" name="senha" id="userPassword" placeholder="********" required />

                        </div>

                    </div>

                    <button className="buttonSubmitForm" type="submit">Entrar</button>

                </form>

                <p className="linkAuthQuestion">
                    Não tem conta? <Link to={"/cadastro"}>Crie uma.</Link>
                </p>

            </div>

        </>
    )
}

export default Login
