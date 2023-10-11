// Функция для проверки длины
function getStringLength(checkString, maxLength) {
  return checkString.length <= maxLength;
}

getStringLength('Hello world', 15);

// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  let noSpaces = string.replaceAll(' ', '');
  let lowerString = noSpaces.toLowerCase();
  let newString = '';

  for (let i = lowerString.length - 1; i >= 0; i--) {
    newString += lowerString[i];
  }

  return newString === lowerString;
}

isPalindrome('Лёша на полке клопа нашёл ');

