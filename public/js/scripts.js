// Seleciona o botão de calcular
const btnCalcular = document.querySelector("#btn");

// Adiciona o evento de click ao botao (fazendo assim a soma dos parâmetros recebidos)
btnCalcular.addEventListener("click", function() {
    // Seleciona os campos de entrada
    const potenciaTotal = Number(document.querySelector("#potencia-Total").value);
    const potenciaPainel = Number(document.querySelector("#potencia-Painel").value);
    const comprimentoPainel = Number(document.querySelector("#comprimento-Painel").value);
    const larguraPainel = Number(document.querySelector("#largura-Painel").value);
    const estruturaBase = document.querySelector("#estrutura-Base").value;

    // Define o limite de paineis por micro-inversores 
    const limitePainelPorInversor = 4;

    // Calcula as respostas
    const qntPlacas = Math.ceil(potenciaTotal * 1000 / potenciaPainel); // Pega a potência total e multiplica por 1000 para converter KW para Watts e divide pela potencia do painel
    const qntInversores = Math.ceil(qntPlacas / limitePainelPorInversor); // Pega a quantidade de placas e divide pela limitação dos micro-inversores
    const potPainel = potenciaPainel;
    const comEstrutura = (qntPlacas * comprimentoPainel);
    const areaUtil = qntPlacas * (larguraPainel * comprimentoPainel); 

    // Exibe as respostas
    document.querySelector("#qntPlacas").textContent = qntPlacas;
    document.querySelector("#qntInversores").textContent = qntInversores;
    document.querySelector("#potPainel").textContent = potPainel;
    document.querySelector("#comEstrutura").textContent = comEstrutura.toFixed(2);
    document.querySelector("#areUtil").textContent = areaUtil.toFixed(2);
});
