function addColor(car) {
  const newCar = Object.assign({}, car, {
    color: "Black",
  });
  return newCar;
}
const car = {
  brand: "Nissan",
  model: "Sentra",
  year: 2020,
};

console.log("Before calling addColor()", car);

const newCar = addColor(car);

console.log("After calling addColor()", car);
console.log("After calling addColor()", newCar);

console.log("Same car?", car === newCar); // false

function flatten(arrays) {
  arrays = arrays.reduce(function (a, b) {
    return a.concat(b);
  });
  return arrays;
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]

function compact(array) {
  return array.filter((a) => {
    return a;
  });
}

const array = [0, 1, false, 2, "", 3];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]

function loop(start, test, update, body) {
  if (!test(start)) return; 
  body(start);
  return loop(update(start), test, update, body);
}

const test = function (n) {
  return n > 0;
};

const update = function (n) {
  return n - 1;
};

loop(3, test, update, console.log);
// 3
// 2
// 1

const estudiantes = [
    { nombre: 'Pedro', calif: 5, grupo: 'A' },
    { nombre: 'Pablo', calif: 8, grupo: 'B' },
    { nombre: 'Alexis', calif: 2, grupo: 'A' },
    { nombre: 'Oscar', calif: 4, grupo: 'C' },
    { nombre: 'Arturo', calif: 7, grupo: 'C' },
    { nombre: 'Juan', calif: 5, grupo: 'A' },
    { nombre: 'José', calif: 6, grupo: 'B' },
    { nombre: 'Cesar', calif: 5, grupo: 'A' },
    { nombre: 'Rodolfo', calif: 7, grupo: 'C' },
    { nombre: 'Arturo', calif: 9, grupo: 'C' },
    { nombre: 'Diego', calif: 8, grupo: 'A' },
    { nombre: 'Esteban', calif: 6, grupo: 'B' },
    { nombre: 'Julio', calif: 6, grupo: 'A' },
    { nombre: 'Ciro', calif: 7, grupo: 'C' }
];

function grupo(a,grupo){
    a2=a.filter(function(n){
        return n.grupo==grupo && n.calif>5
    })
    a2['promedio']=a2.reduce(function(b,curr){
        return b+curr.calif
    },0)/a2.length;
    return a2
}
let A,B,C=[]
A,B,C=[grupo(estudiantes,"A"),grupo(estudiantes,"B"),grupo(estudiantes,"C")]
console.log(A,B,C)
// grupoA; // Estudiantes grupo A aprobados [ { nombre: 'Diego', calif: 8, grupo: 'A' }, ..., {Promedio: ** } ]
//  grupoB; // Estudiantes grupo B aprobados [ { nombre: 'Pablo', calif: 8, grupo: 'B' }, ..., {Promedio: ** } ]
// grupoC; // Estudiantes grupo C aprobados [ { nombre: 'Arturo', calif: 7, grupo: 'C' }, ..., {Promedio: ** } ]