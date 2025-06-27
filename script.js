let quantidade = parseInt(prompt("Quantos números você deseja fazer a média?"));

let soma = 0;

for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    soma += numero;
}

let media = soma / quantidade;

alert(`A média dos números é: ${media}`);

