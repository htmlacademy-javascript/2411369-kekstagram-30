import { renderThumbnails } from './thumbnail.js';
import { showPicture } from './full-size-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  renderThumbnails(pictures, container);
};

const setGalleryListener = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({id}) => id === thumbnailId);

    showPicture(pictureData);
  });
};

export { renderGallery, setGalleryListener };
