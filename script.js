// ——— MENU TOGGLE ———
const menuToggle = document.getElementById('menu-toggle1');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('activeB')
});

// ——— SLIDER ———
const slides = document.querySelectorAll('.slide');
let current   = 0;

function showSlide(idx) {
  slides.forEach((s, i) => {
    s.style.display = i === idx ? 'block' : 'none';
  });
}

// start by showing the first slide
showSlide(current);
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// ——— SCROLL TO TOP ———
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// // ——— RESERVATION FORM POP UP ———

const reservationBtn = document.querySelector("#reservationBtn");
const reservationForm = document.querySelector(".reservation");
const closeFormBtn = document.querySelector("#closeFormBtn");
const overlay = document.querySelector(".popup-overlay");

// Open the popup
reservationBtn.addEventListener("click", () => {
  // If the popup is closed, open it
  if (!reservationForm.classList.contains("active")) {
    reservationForm.classList.add("active");
    overlay.classList.add("active");
  }
});

// Close the popup
closeFormBtn.addEventListener("click", () => {
  // Add the closing animation and remove active class afterward
  reservationForm.classList.add("closing");
  overlay.classList.remove("active");

  reservationForm.addEventListener(
    "animationend",
    function handleClose() {
      reservationForm.classList.remove("active", "closing");
      reservationForm.removeEventListener("animationend", handleClose);
    }
  );
});
