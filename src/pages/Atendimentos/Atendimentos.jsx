/**
 * @file Atendimentos.jsx
 * @description Módulo principal de gerenciamento de atendimentos.
 *
 * Exibe uma tabela de atendimentos com suporte a:
 * - Navegação por data (dia / semana)
 * - Filtros por bairro, status e cliente
 * - Ações rápidas por linha (visualizar, editar, marcar como realizado)
 * - Exportação de relatório e impressão de agenda
 *
 * @module Atendimentos
 */

import { useState } from "react";
import "./Atendimentos.css";
import AtendimentosHeader from "./AtendimentosHeader";

/* ─── Data ─────────────────────────────────────────────── */

/**
 * @typedef {Object} Atendimento
 * @property {number}  id             - Identificador único do atendimento.
 * @property {string}  dateLabel      - Rótulo de data legível ("Hoje", "Ontem", etc.).
 * @property {string}  time           - Intervalo de horário no formato "HH:MM - HH:MM".
 * @property {string}  client         - Nome completo do cliente.
 * @property {string}  initials       - Iniciais do cliente para exibição no avatar (2 chars).
 * @property {"primary"|"secondary"|"tertiary"} avatarVariant - Variante de cor do avatar.
 * @property {boolean} recorrente     - Indica se o atendimento é recorrente.
 * @property {string}  neighborhood   - Bairro onde o atendimento ocorre.
 * @property {string}  value          - Valor do atendimento já formatado (ex: "R$ 180,00").
 * @property {"realizado"|"pendente"} status - Status atual do atendimento.
 */

/**
 * Lista estática de atendimentos exibidos na tabela.
 * Em produção, substituir por dados vindos de uma API via `useEffect`.
 *
 * @type {Atendimento[]}
 */
const ATENDIMENTOS = [
  {
    id: 1,
    dateLabel: "Hoje",
    time: "08:30 - 09:30",
    client: "Ricardo Silva",
    initials: "RS",
    avatarVariant: "primary",
    recorrente: true,
    neighborhood: "Jardins",
    value: "R$ 180,00",
    status: "realizado",
  },
  {
    id: 2,
    dateLabel: "Hoje",
    time: "10:00 - 11:30",
    client: "Beatriz Costa",
    initials: "BC",
    avatarVariant: "secondary",
    recorrente: false,
    neighborhood: "Itaim Bibi",
    value: "R$ 220,00",
    status: "pendente",
  },
  {
    id: 3,
    dateLabel: "Hoje",
    time: "14:00 - 15:00",
    client: "Marcos Lopes",
    initials: "ML",
    avatarVariant: "tertiary",
    recorrente: true,
    neighborhood: "Pinheiros",
    value: "R$ 150,00",
    status: "pendente",
  },
  {
    id: 4,
    dateLabel: "Ontem",
    time: "16:30 - 18:00",
    client: "Ana Souza",
    initials: "AS",
    avatarVariant: "primary",
    recorrente: false,
    neighborhood: "Jardins",
    value: "R$ 210,00",
    status: "realizado",
  },
];

/**
 * Opções disponíveis no filtro de bairro.
 * O primeiro item é o placeholder exibido no select.
 * @type {string[]}
 */
const NEIGHBORHOODS = ["Bairro", "Jardins", "Itaim Bibi", "Pinheiros"];

/**
 * Opções disponíveis no filtro de status.
 * O primeiro item é o placeholder exibido no select.
 * @type {string[]}
 */
const STATUSES = ["Status", "Pendente", "Realizado"];

/**
 * Opções disponíveis no filtro de cliente.
 * O primeiro item é o placeholder exibido no select.
 * @type {string[]}
 */
const CLIENTS = ["Cliente", "Ricardo Silva", "Beatriz Costa", "Marcos Lopes", "Ana Souza"];

/* ─── Sub-components ────────────────────────────────────── */

/**
 * Badge de status do atendimento.
 *
 * Exibe um ponto colorido e um rótulo textual de acordo com o status.
 * - `"realizado"` → badge verde com texto "Realizado"
 * - `"pendente"`  → badge cinza com texto "Pendente"
 *
 * @param {Object} props
 * @param {"realizado"|"pendente"} props.status - Status do atendimento.
 * @returns {JSX.Element}
 *
 * @example
 * <StatusBadge status="realizado" />
 * <StatusBadge status="pendente" />
 */
function StatusBadge({ status }) {
  const label = status === "realizado" ? "Realizado" : "Pendente";
  return (
    <span className={`status-badge ${status}`}>
      <span className="status-dot" />
      {label}
    </span>
  );
}

/**
 * Avatar circular com as iniciais do cliente.
 *
 * A variante define o esquema de cores usando classes CSS do sistema de design:
 * - `"primary"`   → azul (--primary-container)
 * - `"secondary"` → verde-água (--secondary-container)
 * - `"tertiary"`  → lilás (--tertiary-container)
 *
 * @param {Object} props
 * @param {string} props.initials - Iniciais do cliente (recomendado: 2 caracteres).
 * @param {"primary"|"secondary"|"tertiary"} props.variant - Variante de cor do avatar.
 * @returns {JSX.Element}
 *
 * @example
 * <ClientAvatar initials="RS" variant="primary" />
 */
function ClientAvatar({ initials, variant }) {
  return (
    <div className={`client-avatar ${variant}`}>
      {initials}
    </div>
  );
}

/**
 * Conjunto de botões de ação para cada linha da tabela.
 *
 * Renderiza três botões: visualizar, editar e marcar como realizado.
 * O botão de check adapta sua aparência ao status:
 * - Atendimento `"realizado"` → classe `check` (neutro)
 * - Atendimento `"pendente"`  → classe `check-success` (verde)
 *
 * Os botões ficam ocultos por padrão e revelam-se no hover da linha pai
 * via CSS (`.row-actions` com `opacity: 0` → `opacity: 1` em `tr:hover`).
 * Em mobile (≤ 900px), os botões são sempre visíveis.
 *
 * @param {Object} props
 * @param {"realizado"|"pendente"} props.status - Status atual do atendimento.
 * @returns {JSX.Element}
 *
 * @todo Implementar handlers de clique para cada ação (ver, editar, confirmar).
 */
function ActionButtons({ status }) {
  const isRealizado = status === "realizado";
  return (
    <div className="row-actions">
      <button className="action-btn view" title="Ver detalhes">
        <span className="material-symbols-outlined">visibility</span>
      </button>
      <button className="action-btn edit" title="Editar">
        <span className="material-symbols-outlined">edit</span>
      </button>
      <button
        className={`action-btn ${isRealizado ? "check" : "check-success"}`}
        title="Marcar como realizado"
      >
        <span className="material-symbols-outlined">check_circle</span>
      </button>
    </div>
  );
}

/**
 * Select estilizado com ícone Material Symbols posicionado à direita.
 *
 * O primeiro item do array `options` é tratado como placeholder (valor padrão).
 * O ícone é posicionado de forma absoluta dentro do wrapper e é não-interativo
 * (`pointer-events: none`), servindo apenas como indicador visual.
 *
 * @param {Object} props
 * @param {string[]} props.options - Lista de opções. O índice 0 é o placeholder.
 * @param {string}   props.icon   - Nome do ícone Material Symbols (ex: "filter_list").
 * @returns {JSX.Element}
 *
 * @todo Adicionar prop `onChange` e estado controlado para filtragem funcional.
 *
 * @example
 * <FilterSelect options={["Bairro", "Jardins", "Pinheiros"]} icon="expand_more" />
 */
function FilterSelect({ options, icon }) {
  return (
    <div className="filter-select-wrapper">
      <select className="filter-select">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <span className="material-symbols-outlined filter-select-icon">{icon}</span>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */

/**
 * Componente principal da página de Atendimentos.
 *
 * Responsabilidades:
 * - Renderizar o header da página via `<AtendimentosHeader />`
 * - Exibir o painel de controles (toggle dia/semana + navegador de data + filtros)
 * - Renderizar a tabela de atendimentos a partir do array `ATENDIMENTOS`
 * - Exibir o rodapé com contador e ações de exportação/impressão
 *
 * @state {string} activeView  - View ativa no toggle: `"dia"` ou `"semana"`.
 * @state {string} currentDate - Data exibida no navegador (label formatada).
 *
 * @returns {JSX.Element}
 *
 * @example
 * // Uso direto na rota ou no layout pai:
 * <Atendimentos />
 */
export default function Atendimentos() {
  /** @type {["dia"|"semana", Function]} Controla o modo de visualização ativo no toggle. */
  const [activeView, setActiveView] = useState("dia");

  /**
   * Data exibida no navegador de datas.
   * Em produção, deve ser derivada de um objeto `Date` e atualizada
   * pelos botões de navegação (chevron esquerdo / direito).
   * @type {[string, Function]}
   */
  const [currentDate] = useState("30 de Maio, 2025");

  return (
    <>
      {/* Header global da seção de atendimentos */}
      <AtendimentosHeader />

      <div className="atendimentos-page">

        {/* ── Cabeçalho da página ── */}
        <header className='headerPage-atendimentos'>
          <div>
            <h1>Atendimentos</h1>
            <p>Gerencie seus atendimentos da semana para ter uma agenda mais organizada.</p>
          </div>
          {/* Botão de criação de novo atendimento — handler a implementar */}
          <button>
            <span className="material-symbols-outlined">add</span> Novo Atendimento
          </button>
        </header>

        <div className="atendimentos-canvas">

          {/* ── Barra de controles e filtros ── */}
          <section className="controls-section">

            {/* Grupo: toggle de período + navegador de data */}
            <div className="view-date-group">

              {/* Toggle Dia / Semana */}
              <div className="view-toggle">
                <button
                  className={`toggle-btn ${activeView === "dia" ? "active" : ""}`}
                  onClick={() => setActiveView("dia")}
                >
                  Dia
                </button>
                <button
                  className={`toggle-btn ${activeView === "semana" ? "active" : ""}`}
                  onClick={() => setActiveView("semana")}
                >
                  Semana
                </button>
              </div>

              {/* Navegador de data — os botões de chevron ainda não têm lógica de navegação */}
              <div className="date-navigator">
                <button className="nav-btn" aria-label="Dia anterior">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="date-label">{currentDate}</span>
                <button className="nav-btn" aria-label="Próximo dia">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Grupo: filtros secundários (bairro, status, cliente) */}
            <div className="filters-group">
              <FilterSelect options={NEIGHBORHOODS} icon="expand_more" />
              <FilterSelect options={STATUSES} icon="filter_list" />
              <FilterSelect options={CLIENTS} icon="person" />
            </div>
          </section>

          {/* ── Tabela de atendimentos ── */}
          <div className="table-container">
            <table className="atendimentos-table">
              <thead>
                <tr>
                  <th>Data / Hora</th>
                  <th>Cliente</th>
                  <th>Bairro</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {/* Cada atendimento gera uma linha; o hover revela os ActionButtons */}
                {ATENDIMENTOS.map((item) => (
                  <tr key={item.id}>

                    {/* Coluna: Data e horário do atendimento */}
                    <td>
                      <div className="cell-date">
                        <span className="date-main">{item.dateLabel}</span>
                        <span className="date-time">{item.time}</span>
                      </div>
                    </td>

                    {/* Coluna: Avatar + nome do cliente + badge de recorrente */}
                    <td>
                      <div className="cell-client">
                        <ClientAvatar
                          initials={item.initials}
                          variant={item.avatarVariant}
                        />
                        <div className="client-info">
                          <span className="client-name">{item.client}</span>
                          {/* Badge condicional: exibido apenas para clientes recorrentes */}
                          {item.recorrente && (
                            <span className="badge-recorrente">RECORRENTE</span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Coluna: Bairro */}
                    <td>
                      <span className="cell-neighborhood">{item.neighborhood}</span>
                    </td>

                    {/* Coluna: Valor (string já formatada em R$) */}
                    <td>
                      <span className="cell-value">{item.value}</span>
                    </td>

                    {/* Coluna: Badge de status */}
                    <td>
                      <StatusBadge status={item.status} />
                    </td>

                    {/* Coluna: Botões de ação (visíveis no hover da linha) */}
                    <td className="cell-actions">
                      <ActionButtons status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Rodapé da tabela ── */}
          <div className="table-footer">
            {/* Contador de itens exibidos no período selecionado */}
            <p className="footer-count">
              Exibindo <strong>{ATENDIMENTOS.length}</strong> atendimentos para o período selecionado.
            </p>
            <div className="footer-actions">
              {/* Exportar para relatório — handler a implementar */}
              <button className="footer-btn">
                <span className="material-symbols-outlined">download</span>
                Exportar Relatório
              </button>
              {/* Imprimir agenda — handler a implementar */}
              <button className="footer-btn">
                <span className="material-symbols-outlined">print</span>
                Imprimir Agenda
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}