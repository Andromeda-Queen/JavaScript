
function jogoNumeroSecreto() {
        alert('Seja bem-vindo ao nosso jogo!');

    // Gera um número secreto aleatório entre 1 e 10
    let numeroSecreto = 5;

    // Variável para armazenar o chute do usuário
    let chute;
    let tentativas = 0; // Inicia o contador de tentativas

    while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    tentativas++; // Soma +1 a cada tentativa

    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
        }  else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente.`);
        } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente.`);
        }
    }
}

function jogoMedia() {
    alert("Bem-vindo ao Jogo da Média!");

    let quantidade = prompt("Quantos números você quer digitar?");
    quantidade = Number(quantidade);

    if (quantidade <= 0 || quantidade === null || quantidade === "" || typeof quantidade !== "number") {
    alert("Quantidade inválida. Tente novamente com um número maior que zero.");
    } else {
    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
        let entrada = prompt(`Digite o ${i}º número:`);
        let numero = Number(entrada);

        if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
        alert("Valor inválido. Digite um número.");
        i--; // repetir a rodada
        continue;
        }

        soma += numero;
    }

    let media = soma / quantidade;

    // Aqui está o uso correto da template string com crase:
    alert(`A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(2)}`);
    }
}

function calcularSoma() {
    alert("Bem vindo ao jogo da soma!");

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
