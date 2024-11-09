async function verificarCadastro() {
  const cpfCnpj = document.getElementById("cpf_cnpj").value;
  const cep = document.getElementById("cep").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  // Verificação básica de senha
  if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
  }

  try {
      // Mudar aqui o negócio da API
      const response = await axios.post("http://localhost:8080/user", { cpf_cnpj: cpfCnpj });
      
      if (response.data.exists) {
          alert("Este CPF/CNPJ já está cadastrado.");
      } else {
          await cadastrarUsuario({ cpfCnpj, cep, name, password });
      }
  } catch (error) {
      console.error("Erro ao verificar o cadastro:", error);
      alert("Ocorreu um erro ao verificar o cadastro. Tente novamente.");
  }
}

async function cadastrarUsuario(data) {
  try {
      const response = await axios.post("URL_DA_API_CADASTRO", data);
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "index.html";
  } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
  }
}
