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
    let params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_sp4lbal";
    const templateID = "template_lgkewko";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your response sent successfully!!");
        })
        .catch(err => {
            alert("Erro ao enviar mensagem: " + JSON.stringify(err));
            console.log(err);
        }
    );
}

