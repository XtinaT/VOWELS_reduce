'use strict';

var userString = prompt('Введите строку на русском языке');


function getResult(string) {
  var vowels = { а: 0, е: 0, ё: 0, и: 0, о: 0, у: 0, ы: 0, э: 0, ю: 0, я: 0 };// лучше было описать этот хэш до функции findAndCountVowels, чтобы не переописывать его снова и снова ради каждой буквы
  function findAndCountVowels(r, v) {
    if (v in vowels)
      r++;
    return r;
  }
  return string.toLowerCase().split('').reduce(findAndCountVowels, 0);
}//(r,v)=>r+(v in vowels);

function getNumWord(num, word1, word2, word5) {
  var dd = num % 100;
  if ((dd >= 11) && (dd <= 19))
    return word5;
  var d = num % 10;
  if (d == 1)
    return word1;
  if ((d >= 2) && (d <= 4))
    return word2;
  return word5;
}

console.log('В вашей строке ' + getResult(userString) + getNumWord(getResult(userString), ' гласная', ' гласные', ' гласных'));