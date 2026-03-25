import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <aside className='asideNav'>

            <header className='headerNav'>

                <h1>Autonomo +</h1>
                <p>Sistema Gerenciador</p>

            </header>

            <ul className='navigation'>

                <li>
                    <span className="material-symbols-outlined"> dashboard </span> 
                    Dashboard
                </li>

                <li>
                    <span className="material-symbols-outlined"> contacts_product </span>
                    Clientes
                </li>

                <li>
                    <span className="material-symbols-outlined"> event_available </span>
                    Atendimentos
                </li>

                <li>
                    <span className="material-symbols-outlined"> inventory_2 </span>
                    Produtos
                </li>

                <li>
                    <span className="material-symbols-outlined"> payments </span>
                    Pagamentos
                </li>

                <li>
                    <span className="material-symbols-outlined"> receipt_long </span>
                    Dispensas
                </li>

            </ul>

            <footer className='footerNav'>

                <button>Configurações</button>

            </footer>

        </aside>
    )
}

export default Navbar