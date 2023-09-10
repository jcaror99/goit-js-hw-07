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

const linkEvent = (e) => {
  let link;
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    link = e.target.getAttribute("data-source");
  }

  const originalImage = basicLightbox.create(`
    <img src="${link}" width="800" height="600">
`);

  originalImage.show();

  const escape = (e) => {
    if (e.key === "Escape") {
      originalImage.close();
    }
  };

  gallery.addEventListener("keydown", escape);
};

gallery.addEventListener("click", linkEvent);
