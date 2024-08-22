
    // Inicializa a variável 'count' com o valor 1.
// Essa variável é utilizada para rastrear qual "radio button" (botão de seleção) está atualmente selecionado.
let count = 1;

// Define o "radio button" com o id 'radio1' como marcado/selecionado por padrão.
// Isso garante que o primeiro botão de rádio esteja selecionado ao carregar a página.
document.getElementById("radio1").checked = true;

// A função 'setInterval' define um temporizador que executa a função 'nextImage' a cada 2000 milissegundos (2 segundos).
// Isso faz com que as imagens ou conteúdo relacionado mudem automaticamente a cada 2 segundos.
setInterval(function() {
    nextImage();
}, 5000);

// Define a função 'nextImage' que é responsável por mudar a imagem ou o conteúdo exibido.
function nextImage() {
    // Incrementa o valor de 'count' em 1.
    count++;

    // Verifica se 'count' é maior que 3, que é o número total de imagens ou itens de conteúdo.
    // Se 'count' for maior que 3, ele é redefinido para 1 para voltar à primeira imagem.
    if (count > 3) {
        count = 1;
    }

    // Seleciona o "radio button" correspondente ao valor atual de 'count'.
    // O id dos botões de rádio é dinâmico ('radio1', 'radio2', 'radio3'), baseado no valor de 'count'.
    document.getElementById(`radio${count}`).checked = true;
}
