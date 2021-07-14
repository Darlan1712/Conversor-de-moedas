var primeiroValor = parseFloat(prompt("Digite um valor monetário, em reais"))


var operacao = prompt("Digite 1 para converter euro, 2 para converter dólar, 3 para converter a libra, 4 para converter para iene.")

if (operacao == 1) {
    var resultado = (primeiroValor / 6.66).toFixed(2)
    alert(`O resultado da conversão Real-Euro de ${primeiroValor} reais ficou com valor de ${resultado} euros`)
} else if (operacao == 2) {
    var resultado = (primeiroValor / 5.65).toFixed(2)
    alert(`O resultado da conversão Real-Dólar de ${primeiroValor} reais ficou com valor de ${resultado} dólares`)
} else if (operacao == 3) {
    var resultado = (primeiroValor / 7.78).toFixed(2)
    alert(`O resultado da conversão Real-Libra de ${primeiroValor} reais ficou com valor de ${resultado} libras`)
} else if (operacao == 4) {
    var resultado = (primeiroValor * 19.37).toFixed(2)
    alert(`O resultado da conversão Real-iene de ${primeiroValor} reais ficou com valor de ${resultado} ienes`)
} else {
    alert("<h2>Opção inválida</h2>")
}