import "./Dashboard.css"
import React from 'react'

const Dashboard = () => {
  return (
    <>

      <main>

        <header className="header-main">

          <div className="header-brand">

            <h2>Dashboard</h2>

            <div className="separate"></div>

            <select name="selectMonth" id="selectMonth">

              <option value="esseMes">Esse Mês</option>
              <option value="mesPassado">Mês Passado</option>
              <option value="proximoMês">Próximo mês</option>

            </select>

          </div>

          <div className="header-actions">

            <div className="actions">

              <button><span className="material-symbols-outlined"> calendar_today </span></button>
              <button><span className="material-symbols-outlined"> filter_list </span></button>
              <button><span className="material-symbols-outlined"> notifications </span> <span class="material-symbols-outlined"> notifications_unread </span></button>

            </div>

          </div>

        </header>

      </main>

    </>
  )
}

export default Dashboard