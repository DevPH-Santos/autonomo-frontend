import "./Auth.css"
import { Link, useNavigate } from "react-router-dom"
import { cadastrarUsuario, login } from "../../services/authService"

const Cadastro = () => {

    const navigate = useNavigate()
    /**
     * Função executada quando o formulário de cadastro é enviado.
     *
     * Ela valida se as senhas digitadas são iguais, cria o usuário no backend
     * e, em seguida, realiza login automaticamente para liberar o acesso
     * às rotas privadas do sistema.
    */
    async function handleCadastro(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const nome = formData.get("nome")
        const email = formData.get("email")
        const senha = formData.get("senha")
        const confirmarSenha = formData.get("confirmarSenha")

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.")
            return
        }

        try {
            await cadastrarUsuario(nome, email, senha)

            const respostaLogin = await login(email, senha)

            localStorage.setItem("token", respostaLogin.token)
            localStorage.setItem("usuario", JSON.stringify(respostaLogin.usuario))

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

                <form onSubmit={handleCadastro} className="form-auth" id="form-cadastro">

                    <div className="form-header">

                        <h2>Comece sua jornada</h2>
                        <p>Crie sua conta no Autonomo+ hoje mesmo.</p>

                    </div>

                    <div className="campos">

                        <div className="campo">

                            <label htmlFor="userName">NOME COMPLETO</label>
                            <input type="text" name="nome" id="userName" required placeholder="Ex: João Maurício" />

                        </div>

                        <div className="campo">

                            <label htmlFor="userEmail">EMAIL</label>
                            <input type="email" name="email" id="userEmail" required placeholder="e-mail@exemplo.com" />

                        </div>

                        <div className="campo">

                            <label htmlFor="userPassword">SENHA</label>
                            <input type="password" name="senha" id="userPassword" placeholder="********" required />

                        </div>

                        <div className="campo">

                            <label htmlFor="userPasswordConfirm">CONFIRMAR SENHA</label>
                            <input type="password" name="confirmarSenha" id="userPasswordConfirm" placeholder="********" required />

                        </div>

                    </div>

                    <button className="buttonSubmitForm" type="submit">Criar Conta</button>

                </form>

                <p className="linkAuthQuestion">
                    Já tem uma conta? <Link to="/login">Entre em uma.</Link>
                </p>

            </div>

        </>
    )
}

export default Cadastro
