
const sections = document.querySelectorAll('.section');
let currentIndex = 0;

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
});
