let count = 1;
document.getElementById("radio1").checked = true;

// Define um intervalo para executar a função "nextImage" a cada 3000 milissegundos (3 segundos)
setInterval(function() {
    nextImage();
}, 3000);

let count = 1; // Inicializa o contador com o valor 1

// Função responsável por avançar para a próxima imagem do carrossel
function nextImage() {
    count++; // Incrementa o contador para avançar para o próximo slide
    if (count > 3) { // Verifica se o contador ultrapassou o número de slides
        count = 1; // Se sim, redefine o contador para 1 (volta ao primeiro slide)
    }

    // Marca o botão de rádio correspondente ao slide atual como "checked"
    // Isso faz com que o slide correspondente seja exibido
    document.getElementById(`radio${count}`).checked = true;
}
