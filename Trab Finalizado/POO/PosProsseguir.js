document.addEventListener("DOMContentLoaded", function () {
    const carListAluguel = document.getElementById('car-list');
    const carListSeguros = document.getElementById('car-list-seguros');

    // Faz uma requisição para a API para obter os dados dos carros
    axios.get('https://jsonplaceholder.typicode.com/users') // Substitua pela sua API de carros
        .then(response => {
            const users = response.data;

            // Limpa as opções existentes no select de aluguel
            carListAluguel.innerHTML = '';
            // Limpa as opções existentes no select de seguros
            carListSeguros.innerHTML = '';

            // Adiciona uma nova opção para cada carro no select de aluguel
            users.forEach(user => {
                const optionAluguel = document.createElement('option');
                optionAluguel.value = user.id; // Aqui você pode usar o ID do carro da sua API
                optionAluguel.textContent = user.name; // Aqui você pode usar o nome do carro da sua API
                carListAluguel.appendChild(optionAluguel);

                // Adiciona uma nova opção para cada carro no select de seguros
                const optionSeguros = document.createElement('option');
                optionSeguros.value = user.id; // Aqui você pode usar o ID do carro da sua API
                optionSeguros.textContent = user.name; // Aqui você pode usar o nome do carro da sua API
                carListSeguros.appendChild(optionSeguros);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os carros:", error);
        });
});

// Exibe as opções de acordo com o botão clicado
function showOptions(option) {
    const aluguelOptions = document.getElementById('aluguel-options');
    const segurosOptions = document.getElementById('seguros-options');

    if (option === 'aluguel') {
        aluguelOptions.style.display = 'block';
        segurosOptions.style.display = 'none';
    } else if (option === 'seguros') {
        segurosOptions.style.display = 'block';
        aluguelOptions.style.display = 'none';
    }
}

function showDescription(plan) {
    const descriptionAluguel = document.getElementById('plan-description');
    const descriptionSeguros = document.getElementById('plan-description-seguros');

    if (plan === 'simples') {
        descriptionAluguel.textContent = "O Plano Simples oferece cobertura básica para o veículo.";
        descriptionSeguros.textContent = "O Plano Simples oferece cobertura básica para o veículo.";
    } else if (plan === 'total') {
        descriptionAluguel.textContent = "O Plano Total oferece cobertura completa para o veículo, tanto ao carro quanto aos bens pessoais.";
        descriptionSeguros.textContent = "O Plano Total oferece cobertura completa para o veículo, tanto ao carro quanto aos bens pessoais.";
    }
}

// Função para prosseguir com a seleção
function prosseguir() {
    const isAluguelSelected = document.getElementById('aluguel-options').style.display === 'block';
    const carList = isAluguelSelected ? document.getElementById('car-list') : document.getElementById('car-list-seguros');
    const carQuantity = isAluguelSelected ? document.getElementById('car-quantity') : document.getElementById('car-quantity-seguros');
    const startDate = isAluguelSelected ? document.getElementById('start-date') : document.getElementById('start-date-seguros');
    const endDate = isAluguelSelected ? document.getElementById('end-date') : document.getElementById('end-date-seguros');

    // Montando os dados a serem enviados para a próxima página
    const dataToSend = {
        carId: carList.value,
        quantity: carQuantity.value,
        startDate: startDate.value,
        endDate: endDate.value,
        dailyRate: 50, // exemplo de valor da diária
        insurance: 15 // exemplo de valor do seguro
    };

    // Redirecionando para a nova página e passando os dados como parâmetros da URL
    const params = new URLSearchParams(dataToSend).toString();
    window.location.href = `resumo.html?${params}`;
}
