const heroImages = [
    'hero-1.jpg', 
    'hero-2.jpg', 
    'hero-3.jpg'
];

function initSlider() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    heroImages.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = index === 0 ? 'hero-slide active' : 'hero-slide';
        // We use double backticks here so PS writes a single backtick to the file
        slide.setAttribute('style', 'background-image: url(' + src + ')');
        heroSection.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', initSlider);
