const axios = require('axios');

// Função para buscar todos os usuários
async function listarUsuarios() {
    try {
        const response = await axios.get('http://localhost:8080/user');
        const users = response.data;
        console.log("Usuários:", users);
    } catch (error) {
        console.error("Erro ao carregar os usuários:", error);
    }
}

// Função para verificar login
async function validarLogin() {
    // Obtém os valores dos campos de CPF/CNPJ e senha
    const cpfCnpj = document.getElementById('cpfCnpj').value;
    const senha = document.getElementById('password').value;

    // Valida se os campos estão preenchidos
    if (!cpfCnpj || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        // Envia uma requisição POST para a API de validação de usuário
        const response = await axios.post('http://localhost:8080/user', { cpfCnpj, senha });
        const data = response.data;

        if (response.status === 200 && data.autenticado) {
            // Redireciona se o usuário foi autenticado
            window.location.href = 'EscolhaPlano.html';
        } else {
            alert("Usuário ou senha inválidos.");
        }
    } catch (error) {
        console.error("Erro ao tentar fazer login:", error);
        alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
    }
}

// Função para cadastrar um novo usuário
async function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const cpfCnpj = document.getElementById('cpf_cnpj').value;
    const senha = document.getElementById('password').value;
    const cep = document.getElementById('cep').value;

    if (!nome || !cpfCnpj || !senha || !cep) {
        alert("Por favor, preencha todos os campos para cadastro.");
        return;
    }

    try {
        const response = await axios.post('http://localhost:8080/user/cadastrar', {
            nome,
            cpfCnpj,
            senha,
            cep
        });
        if (response.status === 201) {
            alert("Usuário cadastrado com sucesso!");
        }
    } catch (error) {
        console.error("Erro ao cadastrar o usuário:", error);
        alert("Erro ao tentar cadastrar o usuário. Tente novamente mais tarde.");
    }
}

// Evento para carregar os usuários no dropdown
document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById('user-list');
    listarUsuarios()
        .then(users => {
            userList.innerHTML = '';  // Limpa as opções existentes
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.nome; // Usando o campo "nome" do banco de dados
                userList.appendChild(option);
            });
        })
        .catch(error => console.error("Erro ao carregar os usuários:", error));
});
