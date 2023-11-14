const EFFECT = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const EFFECT_TO_FILTER = {
  [EFFECT.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [EFFECT.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [EFFECT.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [EFFECT.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [EFFECT.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const EFFECT_TO_SLIDER_OPTIONS = {
  [EFFECT.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [EFFECT.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');

let chosenEffect = EFFECT.DEFAULT;

const isDefault = () => chosenEffect === EFFECT.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imageElement.style.filter = null;
    return;
  }

  const {value} = effectLevelElement;
  const {style, unit} = EFFECT_TO_FILTER[chosenEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
};

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const onSliderUpdate = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(EFFECT_TO_SLIDER_OPTIONS[chosenEffect]);
    showSlider();
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
  setImageStyle();
};

const reset = () => {
  setEffect(EFFECT.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  createSlider(EFFECT_TO_SLIDER_OPTIONS[chosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export { init, reset };
