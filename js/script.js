// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    setInterval(showNextSlide, 4000);
});

document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll('.text-container');
    containers.forEach(function(container) {
        var button = container.nextElementSibling;
        button.addEventListener('click', function() {
            container.classList.toggle('expanded');
            if (container.classList.contains('expanded')) {
                button.textContent = 'Réduire';
            } else {
                button.textContent = 'Voir plus';
            }
        });
    });
});