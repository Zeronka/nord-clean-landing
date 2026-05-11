const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll('section').forEach((section) => {

    section.classList.add('fade-up');

    observer.observe(section);

});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {

    item.addEventListener('click', () => {

        item.classList.toggle('active');

    });

});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {

    burger.classList.toggle('active');

    nav.classList.toggle('active');

});

const form = document.getElementById('contactForm');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();

    if (name.length < 2) {
        alert('Введите корректное имя');
        return;
    }

    if (phone.length < 10) {
        alert('Введите корректный телефон');
        return;
    }

    successMessage.classList.add('show');

    form.reset();

    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);

});