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

// Функция для подсчета продолжительности встреч в рабочее время
const convertTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((element) => Number(element));

  return hours * 60 + minutes;
};

const checkTime = (startTime, endTime, meetingStart, meetingDuration) => {
  const startDayMinutes = convertTimeToMinutes(startTime);
  const endDayMinutes = convertTimeToMinutes(endTime);
  const startMeetingMinutes = convertTimeToMinutes(meetingStart);

  return (startDayMinutes <= startMeetingMinutes) && ((startMeetingMinutes + meetingDuration) <= endDayMinutes);
};

console.log(checkTime('08:00', '17:30', '14:00', 90));
console.log(checkTime('8:0', '10:0', '8:0', 120));
console.log(checkTime('08:00', '14:30', '14:00', 90));
console.log(checkTime('14:00', '17:30', '08:0', 90));
console.log(checkTime('8:00', '17:30', '08:00', 900));

