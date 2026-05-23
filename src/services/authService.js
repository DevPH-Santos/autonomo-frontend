import { apiFetch } from "./api";

/**
 * Realiza o login do usuário.
 *
 * Essa função envia email e senha para o backend.
 * Se as credenciais estiverem corretas, a API retorna um token JWT
 * e os dados públicos do usuário.
 *
 * Rota chamada no backend:
 * POST /auth/login
 *
 * @param {string} email - Email informado no formulário de login.
 * @param {string} senha - Senha informada no formulário de login.
 * @returns {Promise<object>} Retorna mensagem, token e dados do usuário.
*/

export function login(email, senha) {
    return apiFetch("/auth/login", {
        method: "POST",

        /**
         * O backend espera receber exatamente:
         * {
         *   email: "...",
         *   senha: "..."
         * }
         */
        body: JSON.stringify({
            email,
            senha,
        }),
    })
}

/**
 * Cadastra um novo usuário no sistema.
 *
 * Essa função envia nome, email e senha para o backend.
 * Se os dados forem válidos, a API cria o usuário no banco
 * e retorna os dados públicos do usuário cadastrado.
 *
 * Rota chamada no backend:
 * POST /auth/cadastro
 *
 * @param {string} nome - Nome completo informado no formulário.
 * @param {string} email - Email informado no formulário.
 * @param {string} senha - Senha informada no formulário.
 * @returns {Promise<object>} Retorna mensagem e dados do usuário criado.
*/

export function cadastrarUsuario(nome, email, senha) {
    return apiFetch("/auth/cadastro", {
        method: "POST",

        
        /**
         * O backend espera receber exatamente:
         * {
         *   nome: "...",
         *   email: "...",
         *   senha: "..."
         * }
         */
        body: JSON.stringify({
            nome, 
            email,
            senha,
        }),

    })
}
