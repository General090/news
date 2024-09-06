    const hamBurger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    hamBurger.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });