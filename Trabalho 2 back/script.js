function abrirJogo(numero) {
    if (numero === 1) {
        window.location.href = "JogoSecreto.html";
    } else if (numero === 2) {
        window.location.href = "Media.html";
    } else if (numero === 3) {
        window.location.href = "Soma.html";
    }
}

function voltar() {
    window.location.href = "index.html";
}

function jogoNumeroSecreto() {
    alert('Seja bem-vindo ao nosso jogo!');

    let numeroSecreto = 5; // Você pode deixar fixo ou usar Math.random
    console.log(numeroSecreto); // Para testes, pode remover depois

    let chute;
    let tentativas = 0;

    while (chute != numeroSecreto) {
        chute = parseInt(prompt('Escolha um número entre 1 e 10'));
        tentativas++;

        if (chute == numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente.`);
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente.`);
        }
    }
}

function jogoMedia() {
    const quantidade = parseInt(prompt("Quantos números deseja informar para o cálculo da média?"));
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida.");
        return;
    }

    let soma = 0;
    for (let i = 1; i <= quantidade; i++) {
        const numero = parseFloat(prompt(`Informe o ${i}º número:`));
        if (isNaN(numero)) {
            alert("Número inválido. Tente novamente.");
            return;
        }
        soma += numero;
    }

    const media = soma / quantidade;
    alert(`A média dos números é: ${media.toFixed(2)}`);
}

function calcularSoma() {
    const quantidade = parseInt(prompt("Quantos números deseja somar?"));
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida.");
        return;
    }

    let soma = 0;
    for (let i = 1; i <= quantidade; i++) {
        const numero = parseFloat(prompt(`Informe o ${i}º número:`));
        if (isNaN(numero)) {
            alert("Número inválido. Tente novamente.");
            return;
        }
        soma += numero;
    }
    
    alert(`A soma dos números é: ${soma.toFixed(2)}`);
}

