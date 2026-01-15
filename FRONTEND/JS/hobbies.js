let currentSlide = 0;
let sectionValue = 'gaming'; 

window.onload = function () {
    updateCarousel(sectionValue);
    startAutoSlide(); 
};

document.querySelectorAll('input[name="radio"]').forEach((radioButton) => {
    radioButton.addEventListener('change', function () {
        const selectedValue = this.value;

        document.getElementById('gaming').style.display = 'none';
        document.getElementById('coding').style.display = 'none';
        document.getElementById('watching').style.display = 'none';
        document.getElementById('manga').style.display = 'none';
        document.getElementById('art').style.display = 'none';

        document.getElementById(selectedValue).style.display = 'flex';
        currentSlide = 0;

        updateCarousel(selectedValue); 
        sectionValue = selectedValue; 
    });
});

function nextSlide() {
    let slides = document.querySelectorAll(`#${sectionValue} .carousel-item`);
    if (slides.length > 0) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel(sectionValue);
    }
}

function prevSlide() {
    let slides = document.querySelectorAll(`#${sectionValue} .carousel-item`);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel(sectionValue);
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel(sectionValue);
}

function updateCarousel(sectionId) {
    let slides = document.querySelectorAll(`#${sectionId} .carousel-item`);
    let indicators = document.querySelectorAll(`#${sectionId} .indicator`);
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startAutoSlide() {
    setInterval(() => {
        nextSlide();
    }, 3000); 
}
