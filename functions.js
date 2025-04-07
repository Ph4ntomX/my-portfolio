document.addEventListener('DOMContentLoaded', function () {
    // Portfolio carousel project card handling
    const carousel = document.getElementById('portfolioCarousel');
    const projectCards = document.querySelectorAll('.project-card');

    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', event => {
            projectCards.forEach(card => {
                card.style.display = 'none';
                card.style.opacity = '0';
            });

            const nextCard = document.querySelector(`.project-card[data-project="${event.to}"]`);
            if (nextCard) {
                nextCard.style.display = 'flex';
                setTimeout(() => {
                    nextCard.style.opacity = '1';
                }, 100); // Delay to allow for display change
            }
        });
    }

    const leftSidebar = document.getElementById('left-sidebar');

    document.getElementById('show-left-sidebar').addEventListener('click', () => {
        leftSidebar.classList.add('show');
    });
    document.getElementById('close-left-sidebar').addEventListener('click', () => {
        leftSidebar.classList.remove('show');
    });

    // Show/Hide Right Sidebar
    const rightSidebar = document.getElementById('right-sidebar');

    document.getElementById('show-right-sidebar').addEventListener('click', () => {
        rightSidebar.classList.add('show');
    });

    document.getElementById('close-right-sidebar').addEventListener('click', () => {
        rightSidebar.classList.remove('show');
    });

    rightSidebar.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            rightSidebar.classList.remove('show');
        });
    });

    // Dark/Light Mode Toggle
    const darkLightSwitch = document.getElementById('dark-light-switch');
    const moonIcon = '<i class="bi bi-moon fs-1 text-white"></i>';
    const sunIcon = '<i class="bi bi-sun fs-1 text-white"></i>';

    darkLightSwitch.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        darkLightSwitch.innerHTML = document.body.classList.contains('light-mode') ? sunIcon : moonIcon;
    });

    // Close sidebars when clicking links
    document.querySelectorAll('#left-sidebar .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            leftSidebar.classList.remove('show');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
});