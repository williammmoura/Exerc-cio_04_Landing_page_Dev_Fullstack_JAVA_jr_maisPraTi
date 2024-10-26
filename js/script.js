// Adiciona um ouvinte de evento para rolagem
window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); 
    const backgroundImage = document.querySelector('#background-image'); 

    const backgroundHeight = backgroundImage.offsetHeight;

    if (window.scrollY > backgroundHeight) {
        header.classList.add('solid-background'); 
    } else {
        header.classList.remove('solid-background'); 
    }
});

// Função para buscar usuários e preencher a seção de testemunhos
fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
        const testimonialsContainer = document.getElementById('testimonials-container');

        // Limpa o contêiner antes de adicionar novos testemunhos
        testimonialsContainer.innerHTML = '';

        data.results.forEach(user => {
            // Cria um elemento para cada testemunho
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');
            testimonialDiv.innerHTML = `
                <p>"Este serviço é fantástico! Mudou a forma como gerenciamos nossas atividades!"</p>
                <div class="author">${user.name.first} ${user.name.last}</div>
                <div class="author-position">${user.dob.age} anos</div>
            `;
            testimonialsContainer.appendChild(testimonialDiv);
        });
    });
