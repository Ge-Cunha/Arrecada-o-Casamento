const countDownDate = new Date("Feb 08, 2025 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Progresso da Arrecadação
const meta = 6000.00; // Meta de arrecadação
let arrecadado = 0.00; // Valor inicial arrecadado

function atualizarProgresso() {
    const progressBar = document.getElementById("progress-bar");
    const amountRaised = document.getElementById("amount-raised");

    const percentage = (arrecadado / meta) * 100;
    progressBar.style.width = percentage + "%";
    amountRaised.innerHTML = `Arrecadado: R$ ${arrecadado.toFixed(2)}`;
}

// Função para registrar doações recebidas manualmente
function registrarDoacao(valor) {
    arrecadado += valor;
    atualizarProgresso();
}

// Função para copiar CPF
function copiarCPF() {
    const cpfPix = document.getElementById("cpfPix").innerText;
    navigator.clipboard.writeText(cpfPix).then(function() {
        alert("Chave Pix copiada: " + cpfPix);
    }, function(err) {
        console.error("Erro ao copiar chave Pix: ", err);
    });
}

// Atualiza o progresso ao carregar a página
atualizarProgresso();
