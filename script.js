// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Changement de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation des barres de compétences
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Détecter quand la section compétences est visible
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

observer.observe(skillsSection);

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = new FormData(this);
    
    // Envoyer les données via fetch
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Afficher un message de succès
            alert('Message envoyé avec succès ! Je vous répondrai dès que possible.');
            contactForm.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi du message');
        }
    })
    .catch(error => {
        alert('Une erreur s\'est produite. Veuillez réessayer ou me contacter directement par email.');
        console.error(error);
    });
});
}

// Animation au chargement de la page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // revealObserver.unobserve(entry.target); // Optional: animate only once
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(el => revealObserver.observe(el));

// Typing Text Effect
const typedTextSpan = document.querySelector(".typing-text");
if (typedTextSpan) {
    const cursorSpan = document.createElement("span");
    cursorSpan.classList.add("cursor");
    cursorSpan.innerHTML = "&nbsp;";
    typedTextSpan.parentNode.appendChild(cursorSpan);

    const textArray = ["Élève Ingénieur en Statistiques et Économie", "Passionné de Data Science", "Créateur de Solutions Analytiques"];
    const typingDelay = 100;
    const erasingDelay = 60;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    setTimeout(type, newTextDelay);
}