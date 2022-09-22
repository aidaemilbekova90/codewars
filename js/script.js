"use strict";
// function showResult(numbers, diviser) {
//   return numbers.filter((num) => num % diviser === 0);
// }
// showResult([1, 2, 3, 4, 5, 6], 2);

/*Ваша функция принимает два аргумента:

текущий возраст отца (лет)
текущий возраст сына (лет)
Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const a = Math.abs(dadYearsOld - 2 * sonYearsOld);
  return a;
}
