document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('.nav');
    const dropdownLinks = document.querySelectorAll('.nav__link--dropdown');
    const dropdownItems = document.querySelectorAll('.nav__item--has-dropdown');

    const toggleBodyScroll = (shouldLock) => {
        document.body.classList.toggle('dropdown-open', shouldLock);
    };

    const closeAllDropdowns = () => {
        document.querySelectorAll('.nav__dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    };

    mobileMenuButton.addEventListener('click', function() {
        const isActive = this.classList.toggle('active');
        nav.classList.toggle('active');
        toggleBodyScroll(isActive);
        
        if (!isActive) {
            closeAllDropdowns();
        }
    });

    if (window.innerWidth > 1280) {
        dropdownItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                toggleBodyScroll(true);
            });
            
            item.addEventListener('mouseleave', () => {
                toggleBodyScroll(false);
            });
        });
    }

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1280) {
                e.preventDefault();
                const dropdown = this.closest('.nav__item').querySelector('.nav__dropdown');
                const wasActive = dropdown.classList.contains('active');
                
                closeAllDropdowns();
                
                if (!wasActive) {
                    dropdown.classList.add('active');
                }
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            closeAllDropdowns();
            toggleBodyScroll(false);
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1280) {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            closeAllDropdowns();
            toggleBodyScroll(false);
        }
    });
});