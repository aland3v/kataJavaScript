function getCount(str) {
  var vowelsCount = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount("hola tio murcielago"));
