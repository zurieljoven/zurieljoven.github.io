document.addEventListener("DOMContentLoaded", function() {
  const projectContainers = document.querySelectorAll('.project-container');
  const closeBtns = document.querySelectorAll('.close-btn');

  projectContainers.forEach(container => {
    container.addEventListener('click', () => {
      const popupId = container.getAttribute('data-popup-target');
      const popupCard = document.getElementById(popupId);
      if (popupCard) {
        popupCard.style.display = 'block';
        document.body.classList.add('popup-active'); // Disable body scroll
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const popupCard = btn.closest('.popup-card');
      if (popupCard) {
        popupCard.style.display = 'none';
        document.body.classList.remove('popup-active'); // Re-enable body scroll
      }
    });
  });

  // Optional: Close the popup when clicking outside of it
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-card')) {
      e.target.style.display = 'none';
      document.body.classList.remove('popup-active');
    }
  });
});
