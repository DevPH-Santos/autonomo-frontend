import React from 'react'
import Header_Clientes from '../../components/ui/Header_Clientes/Header_Clientes'

const clientes = [
  {
    iniciais: 'CM', avatarClass: 'client-avatar--secondary-container',
    nome: 'Carlos Mendonça', telefone: '(11) 98877-2211',
    local: 'Alphaville 1', servico: 'FIXO', frequencia: 'Semanal (Seg)',
    valor: 'R$ 180,00', ativo: true,
  },
  {
    iniciais: 'AS', avatarClass: 'client-avatar--tertiary-container',
    nome: 'Ana Souza', telefone: '(11) 97711-4433',
    local: 'Moema', servico: 'EVENTUAL', frequencia: 'Mensal',
    valor: 'R$ 250,00', ativo: true,
  },
  {
    iniciais: 'JR', avatarClass: 'client-avatar--slate',
    nome: 'Jorge Renato', telefone: '(11) 91122-3344',
    local: 'Itaim Bibi', servico: 'FIXO', frequencia: 'Quinzenal',
    valor: 'R$ 210,00', ativo: false,
  },
  {
    iniciais: 'BC', avatarClass: 'client-avatar--sky',
    nome: 'Beatriz Costa', telefone: '(11) 94455-6677',
    local: 'Jardins', servico: 'FIXO', frequencia: 'Semanal (Qui)',
    valor: 'R$ 195,00', ativo: true,
  },
]

const Clientes = () => {
  return (
    <>
      <Header_Clientes />
      <main className="dashboard-container-clientes">


        <header className='headerPage-clientes'>
          <div>
            <h1>Clientes</h1>
            <p>Gerencie seus clientes cadastrados e contratos ativos.</p>
          </div>
          <button>
            <span className="material-symbols-outlined">add</span> Novo Cliente
          </button>
        </header>

        {/* Filter Bar */}
        <section className="filter-bar">
          <div className="filter-bar_label">
            <span className="material-symbols-outlined">filter_list</span>
            <span>Filtros</span>
          </div>
          <div className="filter-bar_divider" />
          <select>
            <option>Todos os Status</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
          <select>
            <option>Todos os Bairros</option>
            <option>Primavera</option>
            <option>Capela Santo Antônio</option>
            <option>Jardim Pinheiros</option>
            <option>Nova Jaguariúna</option>
          </select>
          <select>
            <option>Tipo de Contrato</option>
            <option>Fixo</option>
            <option>Eventual</option>
          </select>
          <div className="filter-bar_count">EXIBINDO 48 CLIENTES</div>
        </section>

        {/* Table Card */}
        <section className="table-card">
          <div className="table-card_scroll">
            <table className="clientes-table">
              <thead>
                <tr>
                  <th>Nome do Cliente</th>
                  <th>Localização</th>
                  <th>Serviço</th>
                  <th>Frequência</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((c) => (
                  <tr key={c.nome}>

                    <td>
                      <div className="client-cell">
                        <div className={`client-avatar ${c.avatarClass}`}>{c.iniciais}</div>
                        <div>
                          <p className="client-info_name">{c.nome}</p>
                          <p className="client-info_phone">{c.telefone}</p>
                        </div>
                      </div>
                    </td>

                    <td data-label="Localização">
                      <span className="cell-location">{c.local}</span>
                    </td>

                    <td data-label="Serviço">
                      <span className="badge-service">{c.servico}</span>
                    </td>

                    <td data-label="Frequência">
                      <span className="cell-frequency">{c.frequencia}</span>
                    </td>

                    <td data-label="Valor">
                      <span className="cell-value">{c.valor}</span>
                    </td>

                    <td data-label="Status">
                      <span className={`badge-status ${c.ativo ? 'badge-status--active' : 'badge-status--inactive'}`}>
                        <span className="badge-status_dot" />
                        {c.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>

                    <td>
                      <div className="row-actions">
                        <button className="row-actions_btn row-actions_btn--view">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                        <button className="row-actions_btn row-actions_btn--edit">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button className="row-actions_btn row-actions_btn--delete">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="table-pagination">
            <p className="table-pagination_info">Mostrando 4 de 48 resultados</p>
            <div className="pagination-controls">
              <button className="pagination-controls_btn pagination-controls_btn--nav">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="pagination-controls_btn pagination-controls_btn--active">1</button>
              <button className="pagination-controls_btn">2</button>
              <button className="pagination-controls_btn">3</button>
              <span className="pagination-controls_ellipsis">...</span>
              <button className="pagination-controls_btn">12</button>
              <button className="pagination-controls_btn pagination-controls_btn--nav">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Clientes
