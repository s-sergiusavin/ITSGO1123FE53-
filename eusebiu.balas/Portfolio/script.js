let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

   
    navbar.classList.toggle('active');

function validateform() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var numberInput = document.getElementById("number");
    var numberValue = numberInput.value.trim();
    var subjectInput = document.getElementById("subject");
    var subjectValue = subjectInput.value.trim();

    if (nameValue === "") {
        nameInput.placeholder = "Name is required";
        nameInput.style.border = "1px solid red";
        nameInput.style.borderRadius = "4px";
        return false;
    } else {
        nameInput.style.border = "";
    }

    if (emailValue === "") {
        emailInput.placeholder = "Email is required";
        emailInput.style.border = "1px solid red";
        emailInput.style.borderRadius = "4px";
        return false;
    } else {
        emailInput.style.border = "";
    }

    if (numberValue === "") {
        numberInput.placeholder = "Mobile number is required";
        numberInput.style.border = "1px solid red";
        numberInput.style.borderRadius = "4px";
        return false;
    } else {
        numberInput.style.border = "";
    }

    if (subjectValue === "") {
        subjectInput.placeholder = "Subject is required";
        subjectInput.style.border = "1px solid red";
        subjectInput.style.borderRadius = "4px";
        return false;
    } else {
        subjectInput.style.border = "";
    }

    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', () => {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
            menuicon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    new Typed('.multiple-text', {
        strings: ['Front-End Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true}
    );

    ScrollReveal({
        distance: '80px',
        duration: 2000
    }).reveal('.home-content, .heading, .home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });

    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
});
