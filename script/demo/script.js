document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', revealSections);
    revealSections(); // Initialer Aufruf um auch bei Reload sichtbare Elemente zu animieren
});

document.getElementById('kontaktformular').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für deine Nachricht!');
});

function autocompleteOrt() {
    // Bisherige Funktion, keine Änderung
}

function revealSections() {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        const elementTop = section.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 150;
        if (isVisible) {
            section.classList.add('visible');
        }
    }
}
