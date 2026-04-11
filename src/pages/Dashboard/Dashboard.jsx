import "./Dashboard.css"
import React from 'react'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "SEMANA 1", receita: 1000 },
  { name: "SEMANA 2", receita: 150 },
  { name: "SEMANA 3", receita: 1000 },
  { name: "SEMANA 4", receita: 150 }
];

const Dashboard = () => {

  const handleShowProfileActions = () => {
    const button = document.getElementsByClassName('personButton')[0]
    const div = document.getElementsByClassName('profileActions')[0]

    if (div.classList.contains('desativada')) {
      div.classList.remove('desativada')
    } else {
      div.classList.add('desativada')
    }

  }

  return (
    <>

      <main className="dashboard-main">

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
              <button><span className="material-symbols-outlined"> notifications </span> <span className="material-symbols-outlined"> notifications_unread </span></button>
              <button onClick={handleShowProfileActions} className="personButton"><span className="material-symbols-outlined"> person </span></button>

              <div className="profileActions desativada">


                <p>Olá Pedro Santos!</p>
                <p>Carteira: R$ 1870,29</p>
                <button className="btnSair">Sair</button>

              </div>

            </div>

          </div>

        </header>

        <div className="dashboard-main-content">

          <div className="header-dashboard">

            <div>

              <h3>Visão Geral</h3>
              <p>Situação das operações de serviço de piscina do mês atual.</p>

            </div>

            <p className="messageStatusPayment">

              <span className="material-symbols-outlined">
                error
              </span>

              2 cliente com pagamento pendente

            </p>

            {/* <p className="messageStatusPayment">

              <span className="material-symbols-outlined">
                check_small
              </span>

              Tudo em ordem por enquanto

            </p> */}

          </div>

          <div className="gains-cards-dashboard">

            <div className="gain-card">

              <div className="header-gain-card">

                <div className="icon"><span className="material-symbols-outlined"> payments </span></div>

                <div className="increase-porcent"><span className="material-symbols-outlined"> trending_up </span> 5%</div>

              </div>

              <div className="gain-card-info">

                <p>RECEITA MENSAL</p>
                <h4>R$4.500,00</h4>

              </div>

            </div>

            <div className="gain-card">

              <div className="header-gain-card">

                <div className="icon"><span className="material-symbols-outlined"> account_balance_wallet </span></div>

                {/* <div className="increase-porcent"><span className="material-symbols-outlined"> trending_up </span> 2%</div>
                <div className="increase-porcent"><span className="material-symbols-outlined"> trending_down </span> 5% </div> */}
                <div className="increase-porcent"><span className="material-symbols-outlined"> trending_flat </span> 0% </div>

              </div>

              <div className="gain-card-info">

                <p>LUCRO MENSAL</p>
                <h4>R$2.800,00</h4>

              </div>

            </div>

            <div className="gain-card">

              <div className="header-gain-card">

                <div className="icon"><span className="material-symbols-outlined"> pending_actions </span></div>

              </div>

              <div className="gain-card-info">

                <p>Total para receber</p>
                <h4>R$1.200,00</h4>

              </div>

            </div>

            <div className="gain-card">

              <div className="header-gain-card">

                <div className="icon"><span className="material-symbols-outlined"> event </span></div>

              </div>

              <div className="gain-card-info">

                <p>TOTAL DE ATENDIMENTOS</p>
                <h4>42</h4>

              </div>

            </div>

          </div>

          <div className="overview-statistics-dashboard">

            <div className="dashboard-chart">

              <div className="header-chart">

                <div>
                  <h4>Desempenho da receita</h4>
                  <p>Resumo semanal para abril</p>
                </div>

                <div>
                  <button>Diariamente</button>
                  <button>Semanalmente</button>
                </div>


              </div>

              <div className="chart-content" style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0b5ed7" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="#0b5ed7" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>

                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      padding={{ left: 20, right: 20 }}
                      tick={{
                        fill: "#94a3b8",       // text-slate-400
                        fontSize: 10,          // text-[10px]
                        fontWeight: 700,       // font-bold
                        letterSpacing: "-0.05em", // tracking-tight
                      }}
                      tickFormatter={(value) => value.toUpperCase()}
                    />

                    <YAxis hide />

                    <Tooltip />

                    <Area
                      type="natural"
                      dataKey="receita"
                      stroke="#0b5ed7"
                      strokeWidth={2.5}
                      fill="url(#colorReceita)"
                      dot={{
                        r: 4,
                        strokeWidth: 2,
                        fill: "#0b5ed7",
                        stroke: "#fff"
                      }}
                      activeDot={{ r: 6 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

            </div>

            <div className="clients-rank-dashboard">

              <h4>Top Clientes</h4>

              <div className="clients-list-rank">

                <div className="client-item-rank">

                  <div className="client-left">

                    <div className="client-position first">1</div>

                    <div className="client-info-item">

                      <h5>João Silva</h5>
                      <p>Serviço residencial</p>

                    </div>

                  </div>

                  <div className="revenue-client-item">

                    <span className="value">R$800,00</span>
                    <span>RECEITA</span>

                  </div>

                </div>

                <div className="client-item-rank">

                  <div className="client-left">

                    <div className="client-position">2</div>

                    <div className="client-info-item">

                      <h5>João Silva</h5>
                      <p>Serviço residencial</p>

                    </div>

                  </div>

                  <div className="revenue-client-item">

                    <span className="value">R$800,00</span>
                    <span>RECEITA</span>

                  </div>

                </div>

                <div className="client-item-rank">

                  <div className="client-left">

                    <div className="client-position">3</div>

                    <div className="client-info-item">

                      <h5>João Silva</h5>
                      <p>Serviço residencial</p>

                    </div>

                  </div>

                  <div className="revenue-client-item">

                    <span className="value">R$800,00</span>
                    <span>RECEITA</span>

                  </div>

                </div>

              </div>

              <a href="#">Ver lista completa</a>

            </div>

          </div>

          <div className="overview-daily-routes">

            <header>
              <h4>Rotas de Hoje</h4>
              <a href="#">
                View Map
                <span className="material-symbols-outlined">map</span>
              </a>
            </header>

            <div className="routes-list">

              <div className="route">
                <div className="route-time">
                  <span className="hour">09:00</span>
                  <span className="period">AM</span>
                </div>

                <div className="informations-route">
                  <p className="objective-visit">Pool Chemical Balance</p>
                  <p className="client-address">Lakeside Manor, Villa 4</p>
                </div>
              </div>

              <div className="route">
                <div className="route-time">
                  <span className="hour">11:30</span>
                  <span className="period">AM</span>
                </div>

                <div className="informations-route">
                  <p className="objective-visit">Filter Replacement</p>
                  <p className="client-address">Sunny Palms Apts</p>
                </div>
              </div>

              <div className="route">
                <div className="route-time">
                  <span className="hour">02:15</span>
                  <span className="period">PM</span>
                </div>

                <div className="informations-route">
                  <p className="objective-visit">Full Cleaning</p>
                  <p className="client-address">Silva Residence</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

    </>
  )
}

export default Dashboard