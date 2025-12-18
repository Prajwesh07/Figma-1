document.querySelectorAll('.map-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.map-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

const mapSection = document.querySelector('.map-view-section');
const minimizeBtn = document.getElementById('map-minimize');
const maximizeBtn = document.getElementById('map-maximize');

minimizeBtn.addEventListener('click', () => {
    mapSection.classList.add('map-minimized');
});

maximizeBtn.addEventListener('click', () => {
    mapSection.classList.remove('map-minimized');
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".featured-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  });
});

const featuredSwiper = new Swiper(".featured-swiper", {
  slidesPerView: 3,        // show 3 slides per view
  spaceBetween: 30,        // gap between slides
  loop: true,              // optional, if you want infinite loop
  pagination: {
    el: ".swiper-pagination",  // link to pagination element
    clickable: true,           // make bullets clickable
  },
  breakpoints: {
    320: { slidesPerView: 1 },  // mobile
    768: { slidesPerView: 2 },  // tablet
    1024: { slidesPerView: 3 }, // desktop
  },
});


  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".apt-grid");
    const cards = document.querySelectorAll(".apt-card");
    const dots = document.querySelectorAll(".apt-dot");

    let currentIndex = 0;
    const gap = 24;
    const cardWidth = cards[0].offsetWidth + gap;

    function updateSlider(index) {
      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });

      dots.forEach(dot => dot.classList.remove("is-active"));
      dots[index].classList.add("is-active");
    }

    function startAutoSlide() {
      return setInterval(() => {
        if (currentIndex < cards.length - 1) {
          currentIndex++;
        } else {
          // restart after last card
          currentIndex = 0;
        }
        updateSlider(currentIndex);
      }, 2500);
    }

    let autoSlide = startAutoSlide();

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
    slider.addEventListener("mouseleave", () => autoSlide = startAutoSlide());

    // Dot click
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider(index);
      });
    });

    // Sync dots on manual scroll
    slider.addEventListener("scroll", () => {
      const index = Math.round(slider.scrollLeft / cardWidth);
      if (index !== currentIndex && dots[index]) {
        currentIndex = index;
        dots.forEach(dot => dot.classList.remove("is-active"));
        dots[index].classList.add("is-active");
      }
    });
  });







