// Slider index.html
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    console.log('slider :', slider)
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    setInterval(showNextSlide, 4000);
});

// Voir le texte en entier page index.html
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

// Offre event Clique
        document.addEventListener("DOMContentLoaded", function() {
            const eventOffer1 = document.querySelector("#eventOffer1");
            console.log("eventOffer1 :", eventOffer1)
            const eventOfferClique = document.querySelector("#eventOfferClique");

            eventOffer1.addEventListener("click", function() {
                eventOffer1.style.display = "none";
                eventOfferClique.style.display = "block";
            });

            eventOfferClique.addEventListener("click", function() {
                eventOfferClique.style.display = "none";
                eventOffer1.style.display = "block";
            });
        });
// Offre event Clique 2
        document.addEventListener("DOMContentLoaded", function() {
            const eventOffer2 = document.querySelector("#eventOffer2");
            const eventOfferClique2 = document.querySelector("#eventOfferClique2");

            eventOffer2.addEventListener("click", function() {
                eventOffer2.style.display = "none";
                eventOfferClique2.style.display = "block";
            });

            eventOfferClique2.addEventListener("click", function() {
                eventOfferClique2.style.display = "none";
                eventOffer2.style.display = "block";
            });
        });
