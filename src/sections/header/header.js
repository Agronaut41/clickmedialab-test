    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('.nav');
    const dropdownLinks = document.querySelectorAll('.nav__link--dropdown');

    mobileMenuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.nav__item').querySelector('.nav__dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            document.querySelectorAll('.nav__dropdown').forEach(dropdown =>dropdown.classList.remove('active'));
        }
    });