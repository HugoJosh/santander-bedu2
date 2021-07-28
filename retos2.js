const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
  array3: [11, 12, 13, 14, 15],
};
let cal = [...array1, ...array2, ...calificaciones.array3];
let suma = 0.0;
console.log(cal);
let primo = true;
for (let i in cal) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      primo = false;
      break;
    }
  }
  if (i == 0 || i == 1) {
    primo = false;
  }
  if (primo) {
    // console.log(i);
    suma += parseInt(i,10);
  }
  primo = true;
}
console.log(suma);
// sumar los numeros primos
