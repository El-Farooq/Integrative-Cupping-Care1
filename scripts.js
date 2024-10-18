//JavaScript for Hamburger Menu and Validation
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function validateAppointment() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    
    if (name === '' || phone === '' || email === '' || age === '') {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
}

function validateContact() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    
    if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

function toggleFaq(faqElement) {
    const answer = faqElement.querySelector('.answer');
    const span = faqElement.querySelector('span');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        span.textContent = '+';
    } else {
        answer.style.display = 'block';
        span.textContent = '-';
    }
}
