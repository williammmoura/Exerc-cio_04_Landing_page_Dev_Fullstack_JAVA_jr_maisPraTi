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

// Swiper JS
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

// Função para buscar usuários e preencher a seção de testemunhos
fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
        const testimonialsContainer = document.getElementById('testimonials-container');
        testimonialsContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novos testemunhos
        data.results.forEach(user => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');
            testimonialDiv.innerHTML = `
                <p>"Este serviço é fantástico! Mudou a forma como gerenciamos nossas atividades!"</p>
                <div class="author">${user.name.first} ${user.name.last}</div>
                <div class="author-position">${user.dob.age} anos</div>
            `;
            testimonialsContainer.appendChild(testimonialDiv);
        });
    }
);

/* EmailJS */
function sendMail() {
    // Obter os valores dos campos
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Verifica se os campos obrigatórios estão preenchidos
    if (!name || !email || !message) {
        alert("Please fill in all required fields."); // Mensagem de erro
        return; // Sai da função, não envia o email
    }

    // Validação do formato de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address."); // Mensagem de erro para email inválido
        return; // Sai da função, não envia o email
    }

    let params = {
        name: name,
        phone: phone,
        email: email,
        message: message,
    };

    const serviceID = "service_sp4lbal";
    const templateID = "template_lgkewko";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("contact-form").reset(); // Limpa o formulário
            alert("Your response has been sent successfully!"); // Mensagem de sucesso
        })
        .catch(err => {
            alert("Erro ao enviar mensagem: " + JSON.stringify(err)); // Mensagem de erro
        });
}