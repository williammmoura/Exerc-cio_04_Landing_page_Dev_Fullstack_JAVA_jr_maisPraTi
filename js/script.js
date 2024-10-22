window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Seleciona o header
    const backgroundImage = document.querySelector('#background-image'); // Seleciona a imagem de fundo

    // Verifica a altura da imagem de fundo
    const backgroundHeight = backgroundImage.offsetHeight;

    // Se o usuário rolar além da altura da imagem de fundo
    if (window.scrollY > backgroundHeight) {
        header.classList.add('solid-background'); // Adiciona classe para fundo sólido
    } else {
        header.classList.remove('solid-background'); // Remove a classe quando estiver acima do fundo
    }
});
