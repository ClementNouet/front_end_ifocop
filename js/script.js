// slide 1
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

// slide2
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slide2');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    setInterval(showNextSlide, 4000);
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
        nav.classList.remove('none');
    } else {
        nav.classList.remove('scrolled');
        nav.classList.add('none');
    }
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

//Filtrage des produits
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const columns = document.querySelectorAll('.column-content');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Enlever la classe 'active' de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe 'active' au bouton cliqué
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            columns.forEach(column => {
                if (filter === 'all') {
                    column.style.display = 'block';
                } else {
                    if (column.getAttribute('data-category') === filter) {
                        column.style.display = 'block';
                    } else {
                        column.style.display = 'none';
                    }
                }
            });
        });
    });
});
