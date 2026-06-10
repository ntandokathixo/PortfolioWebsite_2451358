// Navigation functionality (hamburger menu and scroll effects)
document.addEventListener('DOMContentLoaded', function() {

    const topBar = document.querySelector('.top-bar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuOverlay = document.getElementById('menuOverlay');

    if (topBar && hamburgerBtn && slideMenu && closeMenuBtn && menuOverlay) {
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                topBar.classList.add('scrolled');
            } else {
                topBar.classList.remove('scrolled');
                slideMenu.classList.remove('open');
                menuOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });

        function openMenu() {
            slideMenu.classList.add('open');
            menuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            slideMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        hamburgerBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        const slideLinks = document.querySelectorAll('.slide-menu a');
        slideLinks.forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });
    }

});