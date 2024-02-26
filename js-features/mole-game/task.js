document.addEventListener('DOMContentLoaded', function() {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    let dead = 0;
    let lost = 0;
  
    function getHole(index) {
      return document.getElementById(`hole${index}`);
    }
  
    function resetGame() {
      dead = 0;
      lost = 0;
      deadCounter.textContent = dead;
      lostCounter.textContent = lost;
    }
  
    function handleHoleClick(event) {
      if (event.target.classList.contains('hole_has-mole')) {
        dead += 1;
        deadCounter.textContent = dead;
  
        if (dead === 10) {
          alert('Победа! Вы убили 10 кротов!');
          resetGame();
        }
      } else {
        lost += 1;
        lostCounter.textContent = lost;
  
        if (lost === 5) {
          alert('Вы проиграли! 5 промахов!');
          resetGame();
        }
      }
    }
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.addEventListener('click', handleHoleClick);
    }
  });