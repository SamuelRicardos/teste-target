function calcularSoma() {
    let INDICE = 13
    let SOMA = 0
    let K = 0

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    mostrarResultadoSoma(SOMA)
}

function mostrarResultadoSoma(SOMA) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `O resultado da soma é: ${SOMA}`;
}

function verificaFibonacci(numero) {
    let primeiroNumero = 0;
    let segundoNumero = 1;
    let pertence = false;

    while (primeiroNumero <= numero) {
        if (primeiroNumero === numero) {
            pertence = true;
            break;
        }

        let proximo = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = proximo;
    }

    if (pertence) {
        alert(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        alert(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

function perguntarNumero() {
    const numero = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    verificaFibonacci(numero);
}

const dadosFaturamento = {
    "faturamento": [
        { "dia": 1, "valor": 0 },
        { "dia": 2, "valor": 200 },
        { "dia": 3, "valor": 300 },
        { "dia": 4, "valor": 500 },
        { "dia": 5, "valor": 100 },
        { "dia": 6, "valor": 150 },
        { "dia": 7, "valor": 0 }
    ]
};

function calcularFaturamento() {
    const faturamentoDiario = dadosFaturamento.faturamento;
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

    const resultado = `
      <strong>Menor faturamento:</strong> R$ ${menorFaturamento}<br>
      <strong>Maior faturamento:</strong> R$ ${maiorFaturamento}<br>
      <strong>Número de dias com faturamento superior à média:</strong> ${diasAcimaDaMedia}
    `;
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById("resultadoFaturamento");
    resultadoElemento.innerHTML = resultado;
}

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual() {
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
    let resultado = "Percentual de representação de cada estado no faturamento mensal:<br><br>";
    
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
    }
    
    mostrarResultadoPercentual(resultado);
}

function mostrarResultadoPercentual(resultado) {
    const resultadoElemento = document.getElementById("resultadoPercentual");
    resultadoElemento.innerHTML = resultado;
}

function inverterCaracter() {
    const texto = document.getElementById("textoInput").value; 
    let resultado = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }

    mostrarResultadoInversao(resultado);
}

function mostrarResultadoInversao(resultado) {
    const resultadoElemento = document.getElementById("resultadoInversao");
    resultadoElemento.textContent = resultado;
}
