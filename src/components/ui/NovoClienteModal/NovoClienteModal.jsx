import { useState } from "react";
import "./NovoClienteModal.css";

export default function NovoClienteModal({ isOpen, onClose }) {
  // Guarda todos os valores digitados no formulário do novo cliente.
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    bairro: "",
    tipoContratacao: "fixo",
    frequencia: "semanal",
    valorVisita: "",
    status: "ativo",
    observacoes: "",
  });

  // Guarda quais campos estão com erro para aplicar estilo e exibir mensagens.
  const [erros, setErros] = useState({});

  // Atualiza campos comuns do formulário e remove o erro do campo alterado.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErros((prev) => ({ ...prev, [name]: false }));
  };

  // Lista central dos campos que precisam estar preenchidos antes de salvar.
  const camposObrigatorios = ["nome", "telefone", "email", "endereco", "bairro", "valorVisita"];

  // Valida os campos obrigatórios e o formato do valor antes de fechar o modal.
  const handleSave = () => {
    const novosErros = {};

    camposObrigatorios.forEach((campo) => {
      if (!form[campo] || form[campo].toString().trim() === "") {
        novosErros[campo] = true;
      }
    });

    if (form.valorVisita && !/^\d+(,\d{1,2})?$/.test(form.valorVisita)) {
      novosErros.valorVisita = true;
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    console.log("Cliente salvo:", form);
    setErros({});
    onClose();
  };

  // Fecha o modal apenas quando o clique acontece no fundo escuro.
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Permite digitar somente números e uma vírgula com até duas casas decimais.
  const handleValorVisitaChange = (e) => {
    const { value } = e.target;

    const valorValido = /^\d*(,\d{0,2})?$/.test(value);

    if (valorValido) {
      setForm((prev) => ({ ...prev, valorVisita: value }));
      setErros((prev) => ({ ...prev, valorVisita: false }));
    }
  };

  return (
    <>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          {/* stopPropagation impede que cliques dentro do modal fechem a janela. */}
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="modal-header">
              <div className="modal-header__title-group">
                <div className="modal-header__icon-wrap">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <h2 className="modal-header__title">Novo Cliente</h2>
              </div>
              <button className="modal-header__close" onClick={() => onClose()}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">

              {/* Informações Pessoais */}
              <section className="modal-section">
                <p className="modal-section__label">Informações Pessoais</p>
                <div className="form-grid form-grid--2">
                  <div className="form-field form-grid__full">
                    <label className="form-field__label">Nome completo</label>
                    <input
                      className={`form-input ${erros.nome ? 'form-input--error' : ''}`}
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      type="text"
                      placeholder="Digite o nome do cliente"
                    />
                    {erros.nome && (
                      <span style={{ color: '#9f403d', fontSize: '0.75rem', paddingLeft: '0.25rem' }}>
                        Campo obrigatório
                      </span>
                    )}
                  </div>
                  <div className="form-field">
                    <label className="form-field__label">Telefone</label>
                    <input
                      className={`form-input ${erros.telefone ? 'form-input--error' : ''}`}
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="(00) 00000-0000"
                    />
                    {erros.telefone && (
                      <span style={{ color: '#9f403d', fontSize: '0.75rem', paddingLeft: '0.25rem' }}>
                        Campo obrigatório
                      </span>
                    )}
                  </div>
                  <div className="form-field">
                    <label className="form-field__label">Email</label>
                    <input
                      className={`form-input ${erros.email ? 'form-input--error' : ''}`}
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="exemplo@email.com"
                    />
                    {erros.email && (
                      <span style={{ color: '#9f403d', fontSize: '0.75rem', paddingLeft: '0.25rem' }}>
                        Campo obrigatório
                      </span>
                    )}
                  </div>
                </div>
              </section>

              {/* Localização */}
              <section className="modal-section">
                <p className="modal-section__label">Localização</p>
                <div className="form-grid form-grid--2">
                  <div className="form-field">
                    <label className="form-field__label">Endereço</label>
                    <input
                      className={`form-input ${erros.endereco ? 'form-input--error' : ''}`}
                      name="endereco"
                      value={form.endereco}
                      onChange={handleChange}
                      type="text"
                      placeholder="Rua, número, apto"
                    />
                    {erros.endereco && (
                      <span style={{ color: '#9f403d', fontSize: '0.75rem', paddingLeft: '0.25rem' }}>
                        Campo obrigatório
                      </span>
                    )}
                  </div>
                  <div className="form-field">
                    <label className="form-field__label">Bairro</label>
                    <input
                      className={`form-input ${erros.bairro ? 'form-input--error' : ''}`}
                      name="bairro"
                      value={form.bairro}
                      onChange={handleChange}
                      type="text"
                      placeholder="Nome do bairro"
                    />
                    {erros.bairro && (
                      <span style={{ color: '#9f403d', fontSize: '0.75rem', paddingLeft: '0.25rem' }}>
                        Campo obrigatório
                      </span>
                    )}
                  </div>
                </div>
              </section>

              {/* Configuração de Serviço */}
              <section className="modal-section">
                <p className="modal-section__label">Configuração de Serviço</p>
                <div className="form-grid form-grid--4">
                  <div className="form-field">
                    <label className="form-field__label">Tipo de contratação</label>
                    <select
                      className="form-select"
                      name="tipoContratacao"
                      value={form.tipoContratacao}
                      onChange={handleChange}
                    >
                      <option value="fixo">Fixo</option>
                      <option value="eventual">Eventual</option>
                    </select>

                  </div>
                  <div className="form-field">
                    <label className="form-field__label">Frequência</label>
                    <select
                      className="form-select"
                      name="frequencia"
                      value={form.frequencia}
                      onChange={handleChange}
                    >
                      <option value="semanal">Semanal</option>
                      <option value="quinzenal">Quinzenal</option>
                      <option value="mensal">Mensal</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-field__label">Valor por visita</label>
                    <div className="input-prefix-wrap">
                      <span className="input-prefix">R$</span>
                      <input
                        className={`form-input ${erros.valorVisita ? 'form-input--error' : ''}`}
                        name="valorVisita"
                        value={form.valorVisita}
                        onChange={handleValorVisitaChange}
                        type="text"
                        inputMode="decimal"
                        placeholder="0,00"
                      />
                      {erros.valorVisita && (
                        <span style={{ color: '#9f403d', fontSize: '0.75rem', paddingLeft: '0.25rem' }}>
                          Campo obrigatório
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-field__label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                    >
                      <option value="ativo">Ativo</option>
                      <option value="inativo">Inativo</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Observações */}
              <section className="modal-section">
                <p className="modal-section__label">Observações Adicionais</p>
                <textarea
                  className="form-textarea"
                  name="observacoes"
                  value={form.observacoes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Algum detalhe específico sobre a piscina ou o acesso?"
                />
              </section>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => onClose()}>
                Cancelar
              </button>
              <button className="btn-save" onClick={handleSave}>
                <span className="material-symbols-outlined">save</span>
                Salvar Cliente
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
