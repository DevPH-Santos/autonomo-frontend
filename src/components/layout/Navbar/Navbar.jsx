import { NavLink } from "react-router-dom";
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <aside className='asideNav'>

                <header className='headerNav'>

                    <h1>Autonomo +</h1>
                    <p>Sistema Gerenciador</p>

                </header>

                <ul className='navigation'>

                    <li>
                        <NavLink to="/">
                            <span className="material-symbols-outlined">dashboard</span>
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/clientes">
                            <span className="material-symbols-outlined">contacts_product</span>
                            Clientes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/atendimentos">
                            <span className="material-symbols-outlined">event_available</span>
                            Atendimentos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/produtos">
                            <span className="material-symbols-outlined">inventory_2</span>
                            Produtos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pagamentos">
                            <span className="material-symbols-outlined">payments</span>
                            Pagamentos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/despesas">
                            <span className="material-symbols-outlined">receipt_long</span>
                            Despesas
                        </NavLink>
                    </li>

                </ul>

                <footer className='footerNav'>

                    <button> <span className="material-symbols-outlined mr-4" data-icon="settings">settings</span> Configurações</button>

                </footer>

            </aside>

            <aside className='bottomNav'>

                <ul className='navigation'>

                    <li>

                        <NavLink to="/">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Dashboard</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/clientes">
                            <span className="material-symbols-outlined">contacts_product</span>
                            <span>Clientes</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/atendimentos">
                            <span className="material-symbols-outlined">event_available</span>
                            <span>Atend.</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/produtos">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span>Produtos</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/pagamentos">
                            <span className="material-symbols-outlined">payments</span>
                            <span>Pagtos.</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/despesas">
                            <span className="material-symbols-outlined">receipt_long</span>
                            <span>Despesas</span>
                        </NavLink>
                        
                    </li>

                </ul>

            </aside>

        </>
    )
}

export default Navbar