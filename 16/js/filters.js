import { renderGallery } from './gallery';
import { debounce } from './util';

const MAX_RANDOM_FILTER = 10;

const filterElement = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButon = filterForm.querySelector('#filter-default');
const randomButon = filterForm.querySelector('#filter-random');
const discussedButon = filterForm.querySelector('#filter-discussed');

const FILTER_ENUMERATION = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const getRandomIndex = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const comparePictures = (picture1, picture2) => {
  const item1 = picture1.comments.length;
  const item2 = picture2.comments.length;

  return item2 - item1;
};

const filterHandlers = {
  [FILTER_ENUMERATION.DEFAULT]: (pictures) => pictures,
  [FILTER_ENUMERATION.RANDOM]: (pictures) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, pictures.length);
    while(randomIndexList.length < max) {
      const index = getRandomIndex(0, pictures.length - 1);
      if(!randomIndexList.includes(index)){
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => pictures[index]);
  },
  [FILTER_ENUMERATION.DISCUSSED]: (pictures) => pictures.slice().sort(comparePictures),
};

let currentFilter = FILTER_ENUMERATION.DEFAULT;

const repaint = (evt, filter, pictures) => {
  if (currentFilter !== filter) {
    const filterData = filterHandlers[filter](pictures);
    const thumbnail = document.querySelectorAll('.picture');
    thumbnail.forEach((item) => item.remove());
    renderGallery(filterData);
    const currentActiveElement = filterForm.querySelector('.img-filters__button--active');
    currentActiveElement.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = filter;
  }
};

const debouncedRepaint = debounce(repaint);

const initFilter = (pictures) => {
  filterElement.classList.remove('img-filters--inactive');
  defaultButon.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FILTER_ENUMERATION.DEFAULT, pictures);
  });
  randomButon.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FILTER_ENUMERATION.RANDOM, pictures);
  });
  discussedButon.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FILTER_ENUMERATION.DISCUSSED, pictures);
  });
};

export { initFilter };
