import { galleryItems } from './gallery-items.js';
// Change code below this line



const createImgCards = galleryItems.map((el) => 
  `<div class="gallery__item">
    <a class="gallery__link" href=${el.original}>
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source=${el.original}
        alt=${el.description}
      />
    </a>
  </div>`
  ).join('');

console.log(createImgCards);

// console.log(galleryItems);




// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.