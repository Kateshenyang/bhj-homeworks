const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

let clickCount = 0;

function onCookieClick() {

  clickCount++;
  counterElement.textContent = clickCount;

  const newSize = clickCount % 2 === 0 ? 200 : 180;

  cookieElement.style.width = `${newSize}px`;
  cookieElement.style.height = `${newSize}px`;
}

cookieElement.addEventListener('click', onCookieClick);