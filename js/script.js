// Revenir automatiquement en haut de la page au rechargement
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Récupère l'élément du menu hamburger et la liste de navigation
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

// Ajoute un écouteur d'événements pour gérer le clic sur l'icône hamburger
hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Ouvrir le pop-up de demande d'inscription
document.getElementById('sign-up-btn').addEventListener('click', function() {
    document.getElementById('signup-popup').style.display = 'flex';
});

// Fermer le pop-up de demande d'inscription
document.getElementById('close-signup-popup').addEventListener('click', function() {
    document.getElementById('signup-popup').style.display = 'none';
});

// Fermer le pop-up de confirmation
document.getElementById('close-confirmation-popup').addEventListener('click', function() {
    document.getElementById('confirmation-popup').style.display = 'none';
});

// Gérer la soumission du formulaire d'inscription
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer les valeurs des champs
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var plan = document.getElementById('plan').value;

    // Validation simple
    var isValid = true;
    var errorMessage = '';

    // Vérification des champs obligatoires
    if (!name || !email || !plan) {
        isValid = false;
        errorMessage = 'Please fill in all the fields.';
    }

    // Si les données sont valides
    if (isValid) {
        // Afficher le pop-up de confirmation
        document.getElementById('confirmation-popup').style.display = 'flex';

        // Fermer le pop-up de demande d'inscription
        document.getElementById('signup-popup').style.display = 'none';

        // Réinitialiser le formulaire
        document.getElementById('signup-form').reset();

        // Fermer le pop-up de confirmation après 5 secondes
        setTimeout(function() {
            document.getElementById('confirmation-popup').style.display = 'none';
        }, 5000); // Ferme après 5 secondes
    } else {
        // Si les données sont invalides, afficher un message d'erreur
        alert(errorMessage);
    }
});

// Intersection Observer pour observer l'entrée des sections dans le viewport
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('#intro, #step-1, #step-2, #step-3');

    const observerOptions = {
        threshold: 0.3 // 30% de la section visible pour déclencher l'animation
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Ajoute la classe is-visible
                observer.unobserve(entry.target); // Arrête d'observer une fois l'élément visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('#intro, #business-plans, #freelancer-plans, #sign-up');

    const observerOptions = {
        threshold: 0.3 // 30% de la section visible pour déclencher l'animation
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Ajoute la classe is-visible pour activer l'animation
                observer.unobserve(entry.target); // Arrête d'observer une fois l'élément visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

