import {getPictures} from './data.js';

const picturesList = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesInfo = getPictures();

const createListPictures = document.createDocumentFragment();

picturesInfo.forEach(({url, description, likes, comments}) => {
  const pictureElement = picturesTemplate.cloneNode(ture);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  createListPictures.append(pictureElement);
});

picturesList.append(createListPictures);

export {picturesList};
