function isInteresting(number, awesomePhrases) {
  if (number <= 97) {
    return 0;
  }
  if (
    (awesomePhrases.includes(number) ||
      palindrome(number) ||
      incrementa(number) ||
      decrementa(number) ||
      mismo_digito(number) ||
      digito_ceros(number)) &&
    number >= 100
  ) {
    return 2;
  }
  number = number + 1;
  if (
    awesomePhrases.includes(number) ||
    palindrome(number) ||
    incrementa(number) ||
    decrementa(number) ||
    mismo_digito(number) ||
    digito_ceros(number)
  ) {
    return 1;
  }
  number = number + 1;
  if (
    awesomePhrases.includes(number) ||
    palindrome(number) ||
    incrementa(number) ||
    decrementa(number) ||
    mismo_digito(number) ||
    digito_ceros(number)
  ) {
    return 1;
  }
  return 0;
}

const digito_ceros = (number) => {
  while (number > 9) {
    if (number % 10 !== 0) {
      return false;
    }
    number = parseInt(number / 10);
  }
  return number !== 0 ? true : false;
};

const mismo_digito = (number) => {
  let n = number % 10;
  while (number !== 0) {
    if (number % 10 !== n) {
      return false;
    }
    number = parseInt(number / 10);
  }
  return true;
};

const decrementa = (number) => {
  let digito = number % 10;
  while (number !== 0) {
    if (digito !== number % 10) {
      return false;
    }
    number = parseInt(number / 10);
    digito++;
  }
  return true;
};

const incrementa = (number) => {
  let digito = number % 10;
  while (number !== 0) {
    if (digito !== number % 10) {
      return false;
    }
    number = parseInt(number / 10);
    digito = digito === 0 ? 10 : digito;
    digito--;
  }
  return true;
};

const palindrome = (number) => {
  let newNumber = "";
  let originNumber = number;
  while (number !== 0) {
    newNumber = newNumber + (number % 10);
    number = parseInt(number / 10);
  }
  return parseInt(newNumber) === originNumber ? true : false;
};

//console.log(isInteresting(233432, []));
//console.log(incrementa(1234));
//console.log(decrementa(43221));
//console.log(digito_ceros(000));
console.log(isInteresting(3, [1337, 256]));
console.log(isInteresting(1336, [1337, 256]));
console.log(isInteresting(1337, [1337, 256]));
console.log(isInteresting(11208, [1337, 256]));
console.log(isInteresting(11209, [1337, 256]));
console.log(isInteresting(11211, [1337, 256]));
