// Функция для проверки длины
function getStringLength(checkString, maxLength) {
  return checkString.length <= maxLength;
}

getStringLength('Hello world', 15);

// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const FORMATTED_STRING = string.replaceAll(' ', '').toLowerCase();
  let newString = '';

  for (let i = FORMATTED_STRING.length - 1; i >= 0; i--) {
    newString += FORMATTED_STRING[i];
  }

  return newString === FORMATTED_STRING;
}

isPalindrome('Лёша на полке клопа нашёл ');

