        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
            
            const hamburger = document.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        }