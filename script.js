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
let textArray = ["Élève Ingénieur en Statistiques et Économie", "Passionné de Data Science", "Créateur de Solutions Analytiques"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
let typingCursor;

function createTypingCursor() {
    if (!typedTextSpan) return;
    typingCursor = document.createElement("span");
    typingCursor.classList.add("cursor");
    typingCursor.innerHTML = "&nbsp;";
    typedTextSpan.parentNode.appendChild(typingCursor);
}

function setTextContent(el, text) {
    if (!text) return;
    const icon = el.querySelector && el.querySelector('i');
    if (icon) {
        el.innerHTML = text + ' ' + icon.outerHTML;
    } else {
        el.textContent = text;
    }
}

function translatePage(locale) {
    const translations = {
        fr: {
            page_title: 'Ben Idriss SOMA | Elève Ingénieur Statisticien',
            nav_about: 'À propos',
            nav_educations: 'Formations & Certif',
            nav_skills: 'Compétences',
            nav_projects: 'Projets',
            nav_contact: 'Contact',
            hero_greeting: 'Bonjour, je suis',
            hero_projects: 'Mes Projets',
            hero_contact: 'Me Contacter',
            about_title: 'À propos de moi',
            about_subtitle: 'Mon parcours et ma passion',
            about_role: 'Ingénieur Statisticien économiste en formation',
            about_paragraph_1: 'Je m\'appelle SOMA Ben Idriss, passionné par l\'analyse et la valorisation des données. Actuellement étudiant en statistiques et économie à l\'ENSAE de Dakar, je développe mes compétences en data science, notamment avec Python,R, SQL .',
            about_paragraph_2: 'J\'aime explorer les données ouvertes, participer à des compétitions et transformer des idées en projets concrets à impact.',
            about_education_title: 'Éducation',
            about_education_desc: 'ENSAE Dakar - Statistiques & Économie',
            about_specialties_title: 'Spécialités',
            about_specialties_desc: 'Economie, Statistiques, Analyse de données, Machine learning',
            education_title: 'Formations & Certifications',
            education_subtitle: 'Mon parcours académique et professionnel',
            parcours_title: 'Mon Parcours',
            timeline_ensae_title: 'ENSAE Dakar',
            timeline_ensae_subtitle: 'Élève Ingénieur Statisticien Économiste',
            timeline_ensae_text: 'Formation approfondie en data science, statistiques, et modélisation économique. Apprentissage pratique via des projets rigoureux.',
            timeline_prep_title: 'Classes Préparatoires - Ecole Polytechnique de Ouagadougou',
            timeline_prep_subtitle: 'Mathématiques et Physique',
            timeline_prep_text: 'Préparation intensive aux grandes écoles d\'ingénieurs. Solide formation en sciences fondamentales (Mathématiques, Physique) et en informatique.',
            skills_title: 'Mes Compétences',
            skills_subtitle: 'Ce que je maîtrise',
            skills_techniques: 'Techniques',
            skill_data_analysis: 'Analyse de données',
            skill_visualization: 'Visualisation',
            skill_collection: 'Collecte',
            skill_web_development: 'Développement web',
            skill_engineering: 'Engineering',
            skills_personal: 'Personnelles',
            skill_communication: 'Communication',
            skill_teamwork: 'Travail d\'équipe',
            skill_adaptability: 'Adaptabilité',
            projects_title: 'Mes Projets',
            projects_subtitle: 'Découvrez mon travail',
            project_izzi_title: 'Projet IZZI',
            project_izzi_text: 'IZZI est une application multifonction qui connecte producteurs et acheteurs, avec ou sans internet, et accessible à tous les profils. Application qui a valu un prix lors d\'un Hackathon organisé par AIMS Senegal.',
            project_bigdata_title: 'Data Warehouse for Sales Analysis',
            project_bigdata_text: 'Analyse des ventes via un entrepôt de données (Big Data).',
            project_ml_title: 'Prédiction d\'émissions de CO2',
            project_ml_text: 'Modèle de Machine Learning développé en Python pour la prédiction des émissions de CO2.',
            project_odk_title: 'Dashboard Application de Collecte ODK',
            project_odk_text: 'Déploiement et visualisation des données collectées via ODK (Open Data Kit).',
            project_anip_title: 'Dashboard Power BI - Challenge ANIP',
            project_anip_text: 'Tableau de bord interactif réalisé avec Power BI dans le cadre du challenge ANIP.',
            project_bdd_title: 'Dashboard Éducatif (EduDash)',
            project_bdd_text: 'Projet de création d\'un dashboard éducatif pour visualiser les données scolaires et améliorer la prise de décision dans le secteur de l\'éducation.',
            project_optimisation_title: 'Optimisation de Réseaux 4G',
            project_optimisation_text: 'Étude et optimisation des performances et de la couverture des réseaux 4G.',
            project_yambel_title: 'Application Yambel Toole',
            project_yambel_text: 'Nouvelle version de l\'outil de gestion sous Excel sécurisé et amélioré.',
            project_bank_app_title: 'Application de transfert d\'argent',
            project_bank_app_text: 'Projet de gestion des transactions bancaires développé pendant les CPGE. L\'application peut permettre de gérer les dépots, les retraits et les transferts et permet de voir l\'historique des différentes opérations.',
            project_vba_title: 'Application de transfert d\'argent',
            project_vba_text: 'Ce Projet a été developpé en première année de cycle ingénieur pour aider les multi-services à mieux gérer leur transactions avec excel.',
            contact_title: 'Contactez-moi',
            contact_subtitle: 'Travaillons ensemble',
            contact_heading: 'Discutons de votre projet',
            contact_description: 'Je suis ouvert aux opportunités de collaboration, que ce soit pour des projets de data science, d\'intelligence artificielle, d\'analyse de données ou de développement.',
            contact_name: 'Votre nom',
            contact_email: 'Votre email',
            contact_subject: 'Sujet',
            contact_message: 'Votre message',
            contact_submit: 'Envoyer le message',
            footer_description: 'Futur Data Scientist & Analyste passionné par la transformation des données en solutions.',
            footer_links_title: 'Liens rapides',
            footer_nav_about: 'À propos',
            footer_nav_educations: 'Formations & Certif',
            footer_nav_skills: 'Compétences',
            footer_nav_projects: 'Projets',
            footer_nav_contact: 'Contact',
            view_project: 'Voir le projet',
            view_certificate: 'Voir le certificat',
            hero_typing_texts: ["Élève Ingénieur en Statistiques et Économie", "Passionné de Data Science", "Créateur de Solutions Analytiques"]
        },
        en: {
            page_title: 'Ben Idriss SOMA | Student Engineer in Statistics and Economics',
            nav_about: 'About',
            nav_educations: 'Education & Certs',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_contact: 'Contact',
            hero_greeting: 'Hello, I am',
            hero_projects: 'My Projects',
            hero_contact: 'Contact Me',
            about_title: 'About Me',
            about_subtitle: 'My journey and passion',
            about_role: 'Student Engineer in Statistics and Economics',
            about_paragraph_1: 'My name is SOMA Ben Idriss, passionate about data analysis and value creation. Currently studying statistics and economics at ENSAE Dakar, I am developing my skills in data science, especially with Python, R, SQL.',
            about_paragraph_2: 'I enjoy exploring open data, competing in challenges, and turning ideas into impactful projects.',
            about_education_title: 'Education',
            about_education_desc: 'ENSAE Dakar - Statistics & Economics',
            about_specialties_title: 'Specialties',
            about_specialties_desc: 'Economics, Statistics, Data Analysis, Machine Learning',
            education_title: 'Education & Certifications',
            education_subtitle: 'My academic and professional journey',
            parcours_title: 'My Journey',
            timeline_ensae_title: 'ENSAE Dakar',
            timeline_ensae_subtitle: 'Student Engineer in Statistics and Economics',
            timeline_ensae_text: 'Advanced training in data science, statistics, and economic modeling. Practical learning through rigorous projects.',
            timeline_prep_title: 'Preparatory Classes - Polytechnic School of Ouagadougou',
            timeline_prep_subtitle: 'Mathematics and Physics',
            timeline_prep_text: 'Intensive preparation for top engineering schools. Strong foundation in fundamental sciences (Mathematics, Physics) and computing.',
            skills_title: 'My Skills',
            skills_subtitle: 'What I master',
            skills_techniques: 'Technical',
            skill_data_analysis: 'Data Analysis',
            skill_visualization: 'Visualization',
            skill_collection: 'Data Collection',
            skill_web_development: 'Web Development',
            skill_engineering: 'Engineering',
            skills_personal: 'Personal',
            skill_communication: 'Communication',
            skill_teamwork: 'Teamwork',
            skill_adaptability: 'Adaptability',
            projects_title: 'My Projects',
            projects_subtitle: 'Discover my work',
            project_izzi_title: 'IZZI Project',
            project_izzi_text: 'IZZI is a multifunctional application connecting producers and buyers, online or offline, and accessible to all profiles. It won a prize during a hackathon organized by AIMS Senegal.',
            project_bigdata_title: 'Data Warehouse for Sales Analysis',
            project_bigdata_text: 'Sales analytics using a data warehouse (Big Data).',
            project_ml_title: 'CO2 Emissions Prediction',
            project_ml_text: 'Machine Learning model developed in Python to predict CO2 emissions.',
            project_odk_title: 'ODK Data Collection Dashboard',
            project_odk_text: 'Deployment and visualization of data collected via ODK (Open Data Kit).',
            project_anip_title: 'Power BI Dashboard - ANIP Challenge',
            project_anip_text: 'Interactive dashboard built with Power BI as part of the ANIP challenge.',
            project_bdd_title: 'Educational Dashboard (EduDash)',
            project_bdd_text: 'Project to create an educational dashboard to visualize school data and improve decision-making in the education sector.',
            project_optimisation_title: '4G Network Optimization',
            project_optimisation_text: 'Study and optimization of 4G network performance and coverage.',
            project_yambel_title: 'Yambel Toole Application',
            project_yambel_text: 'New version of a secure and improved Excel-based management tool.',
            project_bank_app_title: 'Money Transfer Application',
            project_bank_app_text: 'Bank transaction management project developed during CPGE. The app can handle deposits, withdrawals, and transfers and display the history of various operations.',
            project_vba_title: 'Money Transfer Application',
            project_vba_text: 'This project was developed in the first year of engineering studies to help multi-service offices better manage transactions with Excel.',
            contact_title: 'Contact Me',
            contact_subtitle: 'Let’s work together',
            contact_heading: 'Let’s talk about your project',
            contact_description: 'I am open to collaboration opportunities, whether for data science, artificial intelligence, data analysis, or development projects.',
            contact_name: 'Your name',
            contact_email: 'Your email',
            contact_subject: 'Subject',
            contact_message: 'Your message',
            contact_submit: 'Send Message',
            footer_description: 'Future Data Scientist & Analyst passionate about turning data into solutions.',
            footer_links_title: 'Quick Links',
            footer_nav_about: 'About',
            footer_nav_educations: 'Education & Certs',
            footer_nav_skills: 'Skills',
            footer_nav_projects: 'Projects',
            footer_nav_contact: 'Contact',
            view_project: 'View Project',
            view_certificate: 'View Certificate',
            hero_typing_texts: ['Student Engineer in Statistics and Economics', 'Passionate about Data Science', 'Creator of Analytical Solutions']
        }
    };

    const dictionary = translations[locale] || translations.fr;
    document.documentElement.lang = locale;
    if (dictionary.page_title) document.title = dictionary.page_title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dictionary[key]) {
            setTextContent(el, dictionary[key]);
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dictionary[key]) {
            el.placeholder = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        if (dictionary[key]) {
            el.alt = dictionary[key];
        }
    });

    document.querySelectorAll('.project-card .btn-project').forEach(a => {
        const text = dictionary.view_project || a.textContent.trim();
        setTextContent(a, text);
    });

    document.querySelectorAll('.certifications-content .btn-project').forEach(a => {
        const text = dictionary.view_certificate || a.textContent.trim();
        setTextContent(a, text);
    });

    if (Array.isArray(dictionary.hero_typing_texts)) {
        textArray = dictionary.hero_typing_texts;
        textArrayIndex = 0;
        charIndex = 0;
        if (typedTextSpan) {
            typedTextSpan.textContent = '';
        }
    }
}

function getUserLocale() {
    const rawLang = navigator.language || navigator.userLanguage || 'fr';
    const lang = rawLang.toLowerCase();
    if (lang.startsWith('en')) return 'en';
    if (lang.startsWith('fr')) return 'fr';
    return 'fr';
}

function type() {
    if (!typedTextSpan || !typingCursor) return;
    if (charIndex < textArray[textArrayIndex].length) {
        if(!typingCursor.classList.contains("typing")) typingCursor.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        typingCursor.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (!typedTextSpan || !typingCursor) return;
    if (charIndex > 0) {
        if(!typingCursor.classList.contains("typing")) typingCursor.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        typingCursor.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

function initTypingEffect() {
    if (!typedTextSpan) return;
    createTypingCursor();
    setTimeout(type, newTextDelay);
}

window.addEventListener('DOMContentLoaded', () => {
    translatePage(getUserLocale());
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    initTypingEffect();
});