document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector('.students-served-text');
  const targetNumbers = textElement.getAttribute('data-target').split(',').map(Number);
  const duration = 2000; // Duration of the animation in milliseconds
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

    // Function to format the text
    const getText = (number, label) => {
      return `${Math.floor(number)}${label}`;
    };

    // Update the text content
    textElement.textContent = `${getText(currentNumbers[0], '+ students served')}, `
                             + `${getText(currentNumbers[1], currentNumbers[1] === 1 ? ' TA mentored as Head TA' : ' TAs mentored as Head TA')}`;

    if (allCompleted) clearInterval(timer);
  }, interval);
});
