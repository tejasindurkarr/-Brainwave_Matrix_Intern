// Wait for the document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerMenu.addEventListener('click', () => {
        // Toggle the display of the mobile navigation menu
        const isDisplayed = mobileNav.style.display === 'flex';
        mobileNav.style.display = isDisplayed ? 'none' : 'flex';
    });


    // --- Login Modal Functionality ---
    const loginModalOverlay = document.getElementById('login-modal-overlay');
    const loginBtn = document.getElementById('login-btn');
    const mobileLoginBtn = document.getElementById('mobile-login-btn'); // Button in mobile menu
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Function to open the modal
    const openModal = () => {
        loginModalOverlay.classList.add('active');
    };

    // Function to close the modal
    const closeModal = () => {
        loginModalOverlay.classList.remove('active');
    };

    // Event listeners to open the modal
    loginBtn.addEventListener('click', openModal);
    mobileLoginBtn.addEventListener('click', () => {
        // First, close the mobile nav if it's open
        mobileNav.style.display = 'none';
        // Then, open the modal
        openModal();
    });

    // Event listener to close the modal via the 'X' button
    closeModalBtn.addEventListener('click', closeModal);

    // Event listener to close the modal by clicking on the overlay (outside the content)
    loginModalOverlay.addEventListener('click', (event) => {
        if (event.target === loginModalOverlay) {
            closeModal();
        }
    });


    // --- Smooth Scrolling ---
    // Select all links with href starting with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // The magic part!
                    block: 'start'
                });
            }
        });
    });

});