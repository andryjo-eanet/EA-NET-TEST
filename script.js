document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('.main-header .container').appendChild(mobileNavToggle);
    
    const mainNav = document.querySelector('.main-nav');
    
    mobileNavToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileNavToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
    
    // Package Card Animation on Scroll
    const packageCards = document.querySelectorAll('.package-card');
    
    function animateCards() {
        packageCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Set initial state for animation
    packageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    animateCards();
    window.addEventListener('scroll', animateCards);
    
    // Form Submission
    const registrationForm = document.querySelector('.registration-section form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to your server
            // For demo purposes, we'll just show an alert
            alert('Terima kasih! Permintaan Anda telah diterima. Tim kami akan segera menghubungi Anda.');
            this.reset();
        });
    }
    
    // Coverage Check Button
    const coverageButton = document.querySelector('.coverage-form button');
    if (coverageButton) {
        coverageButton.addEventListener('click', function() {
            const addressInput = document.querySelector('.coverage-form input');
            if (addressInput.value.trim() === '') {
                alert('Silakan masukkan alamat Anda terlebih dahulu.');
                addressInput.focus();
            } else {
                // In a real implementation, this would check coverage from your database
                alert('Sedang memeriksa ketersediaan di alamat: ' + addressInput.value + '\n\n(Fitur ini akan memeriksa database coverage sebenarnya dalam implementasi penuh)');
            }
        });
    }
});