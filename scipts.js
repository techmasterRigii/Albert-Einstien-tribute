document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slideshow-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideshowInterval;

    // Function to show the next slide
    function nextSlide() {
        // 1. Remove 'active' class from current slide (fades out and unzooms)
        slides[currentSlide].classList.remove('active');

        // 2. Calculate the next slide index
        currentSlide = (currentSlide + 1) % slides.length;

        // 3. Add 'active' class to next slide (fades in and zooms)
        slides[currentSlide].classList.add('active');
    }

    // --- Hover Event Handlers ---

    // 🌟 START Slideshow on Hover
    container.addEventListener('mouseenter', () => {
        // Clear any existing interval to prevent issues
        clearInterval(slideshowInterval); 
        
        // Start the cycle every 3000ms (3 seconds). 
        // TIP: Use a duration slightly longer than the CSS transition time (1.5s)
        slideshowInterval = setInterval(nextSlide, 3000); 
    });

    // 🛑 STOP Slideshow on Mouse Leave
    container.addEventListener('mouseleave', () => {
        clearInterval(slideshowInterval); // Stop the cycle
        
        // OPTIONAL: Reset to the very first image on mouse leave
        slides.forEach(slide => slide.classList.remove('active'));
        slides[0].classList.add('active');
        currentSlide = 0;
    });

    // Initialize: Ensure the very first image starts visible
    slides[0].classList.add('active');
});