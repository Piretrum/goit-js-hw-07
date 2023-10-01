import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

const galleryMarkup = galleryItems
    .map(
        ({preview, original, description}) => 
`<li class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}" 
          data-source="${original}" 
          />
        </a>
      </li>`
    )
    .join("");

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)
    
galleryEl.addEventListener('click', onClick)

function onClick(evt) {
  evt.preventDefault();

  if(!evt.target.classList.contains('gallery__image')) {
    return;
  }
 
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" />
`)
 
  instance.show()
  
  document.addEventListener("keydown", onEsc)
  function onEsc(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
