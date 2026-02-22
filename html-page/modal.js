document.addEventListener("DOMContentLoaded", () => {
    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isActive = navMenu.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isActive);
        });

        // Close menu when clicking a nav link
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // --- LOGIN MODAL ---
    const loginBtn = document.querySelector(".login-btn");
    const loginModal = document.querySelector(".login-modal");
    const closeLogin = document.querySelector(".close-login");

    if (loginBtn && loginModal) {
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            loginModal.classList.add("active");
        });

        if (closeLogin) {
            closeLogin.addEventListener("click", () => {
                loginModal.classList.remove("active");
            });
        }

        // Close when clicking outside of modal content
        loginModal.addEventListener("click", (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove("active");
            }
        });
    }

    // --- FORGOT PASSWORD TOGGLE (Optional UI logic) ---
    const showReset = document.querySelector(".show-reset");
    const backLogin = document.querySelector(".back-login");
    const loginView = document.querySelector(".login-view");
    const resetView = document.querySelector(".reset-view");

    if (showReset && backLogin && loginView && resetView) {
        showReset.addEventListener("click", (e) => {
            e.preventDefault();
            loginView.style.display = "none";
            resetView.style.display = "block";
        });

        backLogin.addEventListener("click", (e) => {
            e.preventDefault();
            loginView.style.display = "block";
            resetView.style.display = "none";
        });
    }
});
