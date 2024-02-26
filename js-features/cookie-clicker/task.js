// Получаем элементы счетчика и изображения печеньки
const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

// Инициализируем счетчик кликов
let clickCount = 0;

// Функция для обработки клика по печеньке
function onCookieClick() {
  // Увеличиваем счетчик на 1
  clickCount++;
  counterElement.textContent = clickCount;

  // Чередуем уменьшение и увеличение размера печеньки
  const newSize = clickCount % 2 === 0 ? 200 : 180; // Если число кликов четное, увеличиваем, если нечетное - уменьшаем
  
  // Применяем новый размер к изображению печеньки
  cookieElement.style.width = `${newSize}px`;
  cookieElement.style.height = `${newSize}px`;
}

// Добавляем обработчик клика к элементу изображения печеньки
cookieElement.addEventListener('click', onCookieClick);