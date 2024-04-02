document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
  
    rotators.forEach(rotator => {
      let activeCase = rotator.querySelector('.rotator__case_active');
      let nextSwitch = parseInt(activeCase.dataset.speed, 10);
  
      const switchCase = () => {
        setTimeout(() => {
          let nextCase = activeCase.nextElementSibling || rotator.firstElementChild;
          activeCase.classList.remove('rotator__case_active');
          nextCase.classList.add('rotator__case_active');
          activeCase = nextCase;
          nextSwitch = parseInt(activeCase.dataset.speed, 10);
          activeCase.style.color = activeCase.dataset.color;
          switchCase();
        }, nextSwitch);
      };
      switchCase();
    });
  });