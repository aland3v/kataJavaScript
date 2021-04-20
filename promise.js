let edad = 10;
let myName = "alan";

const miPromesa = new Promise((resolve, reject) => {
  if ((myName = "alan" || edad == 28)) {
    resolve("exito");
  } else {
    reject("fracaso");
  }
});

miPromesa
  .then((acc) => {
    console.log(acc);
  })
  .catch((err) => {
    console.log(err);
  });
