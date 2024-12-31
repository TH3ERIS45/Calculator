// Exibe os valores digitados no display
function appendtoDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Erro') {
        display.value = value; // Substitui o valor inicial
    } else {
        display.value += value; // Adiciona o valor ao final
    }
}

// Limpa o display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Realiza o cálculo da expressão (interage com o backend)
async function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // Envia a expressão para o backend
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expression }),
        });

        const data = await response.json();

        if (data.result !== undefined) {
            display.value = data.result; // Mostra o resultado
        } else {
            display.value = 'Erro'; // Mostra erro em caso de problema
        }
    } catch (error) {
        display.value = 'Erro';
    }
}
