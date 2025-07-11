document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica para el modo oscuro ---
    const darkModeToggle = document.getElementById('darkModeToggle');

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        if (darkModeToggle) {
            darkModeToggle.textContent = '☀️'; // Cambia el ícono a un sol
        }
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        if (darkModeToggle) {
            darkModeToggle.textContent = '🌙'; // Cambia el ícono a una luna
        }
    };

    // Al cargar la página, comprueba la preferencia guardada
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Añade el evento de clic al botón
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // --- Lógica para el botón de scroll to top (existente) ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        // ... (código existente sin cambios)
    }

    // --- Lógica para la alerta del modal (existente) ---
    const showAlertButton = document.getElementById('showAlertBtn');
    if (showAlertButton) {
        showAlertButton.addEventListener('click', () => {
            alert('Gracias por confiar!');
        });
    }
    
    // --- Lógica del carrusel (existente en el HTML, movida aquí para mejor manejo) ---
    const carousel = document.getElementById('carouselExampleIndicators');
    if (carousel) {
        const carouselInner = carousel.querySelector('.carousel-inner');
        function adjustCarouselHeight() {
            const activeItem = carousel.querySelector('.carousel-item.active');
            if (activeItem) {
                const activeImage = activeItem.querySelector('img');
                if (activeImage.complete) {
                    carouselInner.style.height = `${activeImage.clientHeight}px`;
                } else {
                    activeImage.onload = () => {
                        carouselInner.style.height = `${activeImage.clientHeight}px`;
                    };
                }
            }
        }
        carousel.addEventListener('slid.bs.carousel', adjustCarouselHeight);
        window.addEventListener('load', adjustCarouselHeight);
        window.addEventListener('resize', adjustCarouselHeight);
    }
});