document.addEventListener("DOMContentLoaded", function () {
    const carListAluguel = document.getElementById('car-list');
    const carListSeguros = document.getElementById('car-list-seguros');

    axios.get('http://localhost:8080/user') // API de carros
        .then(response => {
            const users = response.data;

            carListAluguel.innerHTML = '';

            carListSeguros.innerHTML = '';

            users.forEach(user => {
                const optionAluguel = document.createElement('option');
                optionAluguel.value = user.id; // usar o ID do carro da sua API
                optionAluguel.textContent = user.name; // nome do carro da sua API
                carListAluguel.appendChild(optionAluguel);

                // Adiciona uma nova opção para cada carro no select de seguros
                const optionSeguros = document.createElement('option');
                optionSeguros.value = user.id; // o ID do carro da sua API
                optionSeguros.textContent = user.name; // o nome do carro da sua API
                carListSeguros.appendChild(optionSeguros);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os carros:", error);
        });
});

function showOptions(option) {
    const aluguelOptions = document.getElementById('aluguel-options');
    const segurosOptions = document.getElementById('seguros-options');

    const aluguelButton = document.querySelector('.btn[onclick="showOptions(\'aluguel\')"]');
    const segurosButton = document.querySelector('.btn[onclick="showOptions(\'seguros\')"]');

    if (option === 'aluguel') {
        aluguelOptions.style.display = 'block';
        segurosOptions.style.display = 'none';
        aluguelButton.classList.add('selected'); // Adiciona a classe selecionada
        segurosButton.classList.remove('selected'); // Remove a classe do botão de seguros
    } else if (option === 'seguros') {
        segurosOptions.style.display = 'block';
        aluguelOptions.style.display = 'none';
        segurosButton.classList.add('selected'); // Adiciona a classe selecionada
        aluguelButton.classList.remove('selected'); // Remove a classe do botão de aluguel
    }
}

function showDescription(plan) {
    const descriptionAluguel = document.getElementById('plan-description');
    const descriptionSeguros = document.getElementById('plan-description-seguros');

    if (plan === 'simples') {
        descriptionAluguel.textContent = "O Plano Simples oferece cobertura básica para o veículo.";
        descriptionSeguros.textContent = "O Plano Simples oferece cobertura básica para o veículo.";
    } else if (plan === 'total') {
        descriptionAluguel.textContent = "O Plano Total oferece cobertura completa para o veículo.";
        descriptionSeguros.textContent = "O Plano Total oferece cobertura completa para o veículo.";
    }
}

// Função para prosseguir com a seleção
function prosseguir() {
    const isAluguelSelected = document.getElementById('aluguel-options').style.display === 'block';
    const carList = isAluguelSelected ? document.getElementById('car-list') : document.getElementById('car-list-seguros');
    const carQuantity = isAluguelSelected ? document.getElementById('car-quantity') : document.getElementById('car-quantity-seguros');
    const startDate = isAluguelSelected ? document.getElementById('start-date') : document.getElementById('start-date-seguros');
    const endDate = isAluguelSelected ? document.getElementById('end-date') : document.getElementById('end-date-seguros');

    // Montando os dados a serem enviados para o servidor
    const dataToSend = {
        carId: carList.value,
        quantity: carQuantity.value,
        startDate: startDate.value,
        endDate: endDate.value
    };

    // Enviando os dados para o servidor
    axios.post('https://your-server-endpoint.com/api/submit', dataToSend)
        .then(response => {
            console.log("Dados enviados com sucesso:", response.data);
            alert("Dados enviados com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
            alert("Ocorreu um erro ao enviar os dados.");
        });
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
    window.location.href = `PosProsseguir.html?${params}`; // Atualize a URL aqui
}
