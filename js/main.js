const DESCRIPTIONS = [
  'Первое описание фотографии',
  'Второе описание фотографии',
  'Третье описание фотографии',
  'Четвертое описание фотографии',
  'Пятое описание фотографии',
  'Шестое описание фотографии',
  'Седьмое описание фотографии',
  'Восьмое описание фотографии',
  'Девятое описание фотографии',
  'Ииии последнее описание фотографии',
];

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Руслан',
  'Макар',
  'Александр',
  'Андрей',
  'Роман',
  'Ольга',
  'Наталья',
  'Кристина',
  'Екатерина',
  'Валерия',
];

// Получаем случайное число из диапазона
function getRandomValue (min, max) {
  const LOWER = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const UPPER = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const RESULT = Math.random() * (UPPER - LOWER + 1) + LOWER;

  return Math.floor(RESULT);
}

// Проверяем на оригинальность полученного случайного числа
function createRandomValue (min, max) {
  const PREVIOUS_VALUES = [];

  return function () {
    let currentValue = getRandomValue(min, max);

    while (PREVIOUS_VALUES.includes(currentValue)) {
      currentValue = getRandomValue(min, max);
    }
    PREVIOUS_VALUES.push(currentValue);

    return currentValue;
  };
}

// Получаем случайное значение из массива
function getRandomArrayElement (elements) {
  return elements[getRandomValue(0, elements.length - 1)];
}

// Функция для генерации данных
function getPhotoInfo () {
  const PHOTO_INFO = {
    id: createRandomValue (1, 25),
    url: createRandomValue (1, 25),
    description: getRandomArrayElement (DESCRIPTIONS),
    likes: createRandomValue (15, 200),

    getCommentsPhoto: function () {
      const COMMENT_COUNT = createRandomValue (1, 30);
      const COMMENTS = [];

      for (let i = 0; i <= COMMENT_COUNT; i++) {
        const COMMENT = {
          id: createRandomValue (1, 10000),
          avatar: getRandomArrayElement (AVATARS),
          message: getRandomArrayElement (MESSAGES),
          name: getRandomArrayElement (NAMES),
        };
        COMMENTS.push(COMMENT);
      }

      return COMMENTS;
    },
  };

  return PHOTO_INFO;
}

const PHOTO_GALLERY = Array.from({length: 25}, getPhotoInfo);

console.log(PHOTO_GALLERY);
