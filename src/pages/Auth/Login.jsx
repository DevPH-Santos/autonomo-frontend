import "./Auth.css"
import React from 'react'

const Login = () => {

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

                <form method="post" className="form-auth" id="form-login">

                    <div className="form-header">

                        <h2>Entrar</h2>
                        <p>Acesse sua conta para continuar.</p>

                    </div>

                    <div className="campos">

                        <div className="campo">

                            <label htmlFor="userEmail">EMAIL</label>
                            <input type="email" name="userEmail" id="userEmail" required placeholder='e-mail@exemplo.com' />

                        </div>

                        <div className="campo">

                            <div className="esqueciSenhaDiv">

                                <label htmlFor="userPassword">SENHA</label>
                                <a href="#">Esqueci minha senha</a>

                            </div>
                            <input type="password" name="userPassword" id="userPassword" placeholder='********' required />

                        </div>

                    </div>

                    <button className="buttonSubmitForm" type="submit">Entrar</button>

                </form>

                <p className="linkAuthQuestion">Não tem conta? <a href="#">Crie uma.</a></p>

            </div>

        </>
    )
}

export default Login