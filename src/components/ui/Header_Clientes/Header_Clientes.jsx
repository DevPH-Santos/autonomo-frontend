import "./Header_Clientes.css"
import React from 'react'

const Header_Clientes = () => {

    // -------------------------------------------------------------------------
    // Handlers
    // -------------------------------------------------------------------------

    /**
     * Alterna a visibilidade do menu suspenso de ações do perfil.
     *
     * Adiciona ou remove a classe CSS `profile-actions-hidden` do primeiro
     * elemento com a classe `profile-actions` encontrado no DOM.
     *
     * @function
     * @returns {void}
     */
    const handleShowProfileActions = () => {
        const div = document.getElementsByClassName("profile-actions")[0];

        if (div.classList.contains("profile-actions-hidden")) {
            div.classList.remove("profile-actions-hidden");
        } else {
            div.classList.add("profile-actions-hidden");
        }
    };

    return (

        <header className="header-main">

            {/* Marca e seletor de período */}
            <div className="header-brand">

                <span className="material-symbols-outlined"> search </span>
                <input type="text" placeholder="Buscar cliente por nome ou telefone..." />

            </div>

            {/* Botões de ação e perfil */}
            <div className="header-actions">
                <div className="actions">

                    {/* Atalhos rápidos */}
                    <button aria-label="Calendário">
                        <span className="material-symbols-outlined">calendar_today</span>
                    </button>
                    <button aria-label="Notificações">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="material-symbols-outlined">notifications_unread</span>
                    </button>

                    {/**
               * Botão de perfil — abre/fecha o menu de ações do usuário.
               * @see handleShowProfileActions
               */}
                    <button
                        onClick={handleShowProfileActions}
                        className="header-profile-button"
                        aria-haspopup="true"
                        aria-label="Abrir menu do perfil"
                    >
                        <span className="material-symbols-outlined">person</span>
                    </button>

                    {/* Menu suspenso de perfil (visibilidade controlada por CSS) */}
                    <div className="profile-actions profile-actions-hidden" role="menu">
                        <p>Olá Pedro Santos!</p>
                        <p>Carteira: R$ 1870,29</p>
                        <button className="btn-logout" role="menuitem">Sair</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header_Clientes