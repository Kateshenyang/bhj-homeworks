document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    
    let timeRemaining = parseInt(timerElement.textContent);
  
    function updateTimer() {
      timeRemaining --;
      timerElement.textContent = timeRemaining;
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
      }
    }
    const timerInterval = setInterval(updateTimer, 1000);
  });