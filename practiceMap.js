const raices = (arr) => {
  return arr.map((item) => Math.sqrt(item));
};

const porDos = (arr) => {
  return arr.map((item) => item * 2);
};

const cuadrado = (arr) => {
  return arr.map((item) => item * item);
};

miArray = [1, 4, 9, 16, 25];
arrRaices = raices(miArray);
arrDoble = porDos( miArray);
arrCuadrado = cuadrado(miArray);

console.log("Array original:", miArray);
console.log("Raices:", arrRaices);
console.log("Dobles:", arrDoble);
console.log("Cuadrado:", arrCuadrado);
