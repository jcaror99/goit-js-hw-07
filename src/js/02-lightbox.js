import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((element) => {
    const newMarkup = `<li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
        </a>
    </li>`;
    return newMarkup;
  })
  .join("");
gallery.innerHTML = markup;

const originalImage = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
