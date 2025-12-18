document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".property-card-track");
    const cards = document.querySelectorAll(".listing-card");
    const indicators = document.querySelectorAll(".indicator");

    let index = 0;

    function visibleCards() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function moveSlider() {
        const cardWidth = cards[0].offsetWidth + 30;
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        indicators.forEach((dot, i) =>
            dot.classList.toggle("active", i === index)
        );
    }

    function nextSlide() {
        const maxIndex = cards.length - visibleCards();
        index = index >= maxIndex ? 0 : index + 1;
        moveSlider();
    }

    let autoSlide = setInterval(nextSlide, 4000);

    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            moveSlider();
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, 4000);
        });
    });

    window.addEventListener("resize", moveSlider);
});