import "./Auth.css"
import React from 'react'

const Cadastro = () => {
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

                        <h2>Comece sua jornada</h2>
                        <p>Crie sua conta no Autonomo+ hoje mesmo.</p>

                    </div>

                    <div className="campos">

                        <div className="campo">

                            <label htmlFor="userName">NOME COMPLETO</label>
                            <input type="text" name="userName" id="userName" required placeholder='Ex: João Maurício' />

                        </div>

                        <div className="campo">

                            <label htmlFor="userEmail">EMAIL</label>
                            <input type="email" name="userEmail" id="userEmail" required placeholder='e-mail@exemplo.com' />

                        </div>

                        <div className="campo">

                            <label htmlFor="userPassword">SENHA</label>
                            <input type="password" name="userPassword" id="userPassword" placeholder='********' required />

                        </div>

                        <div className="campo">

                            <label htmlFor="userPasswordConfirm">CONFIRMAR SENHA</label>
                            <input type="password" name="userPasswordConfirm" id="userPasswordConfirm" placeholder='********' required />

                        </div>

                    </div>

                    <button className="buttonSubmitForm" type="submit">Criar Conta</button>

                </form>

                <p className="linkAuthQuestion">Já tem uma conta? <a href="#">Entre em uma.</a></p>

            </div>

        </>
    )
}

export default Cadastro