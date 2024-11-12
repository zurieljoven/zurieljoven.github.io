document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector('.animated-text-TAships');
  const targetNumbers = textElement.getAttribute('data-target').split(',').map(Number);
  const duration = 1000; // Duration of the animation in milliseconds
  const interval = 10; // Update interval in milliseconds
  const steps = targetNumbers.map(target => (target - 1) / (duration / interval));

  // Initialize current numbers to start at 1
  let currentNumbers = targetNumbers.map(() => 1);

  const timer = setInterval(() => {
    let allCompleted = true;

    currentNumbers = currentNumbers.map((current, index) => {
      if (current < targetNumbers[index]) {
        current += steps[index];
        allCompleted = false;
      }
      return Math.min(current, targetNumbers[index]);
    });

    // Function to determine singular or plural
    const getText = (number, singular, plural) => {
      return `${Math.floor(number)} ${number === 1 ? singular : plural}`;
    };

    // Update the text content with singular or plural forms
    textElement.textContent = `${getText(currentNumbers[0], 'teaching assistantship', 'teaching assistantships')}, `
                             + `${getText(currentNumbers[1], 'as Head TA', 'as Head TA')}`;

    if (allCompleted) clearInterval(timer);
  }, interval);
});
