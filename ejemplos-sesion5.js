var singers = [
  { name: "Steven Tyler", band: "Aerosmith", born: 1948 },
  { name: "Karen Carpenter", band: "The Carpenters", born: 1950 },
  { name: "Kurt Cobain", band: "Nirvana", born: 1967 },
  { name: "Chris Cornell", band: "Soundgarden", born: 1964 },
];

function pluck(list, propertyName) {
  let list2 = [];
  for (let i = 0; i < list.length; i++) {
    list2.push(list[i][propertyName]);
  }
  return list2;
}
console.log(pluck(singers, "name"));
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log(pluck(singers, "band"));
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log(pluck(singers, "born"));
// [1948, 1950, 1967, 1964]

function createPhoneNumber(numbers) {
  numcomp = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      numcomp += `(${numbers[i]}`;
      continue;
    }
    if (i == 2) {
      numcomp += `${numbers[i]}) `;
      continue;
    }
    if (i == 5) {
      numcomp += `${numbers[i]}-`;
      continue;
    }
    numcomp += `${numbers[i]}`;
  }
  console.log(numcomp);
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

function findMissingNumbers(numbers) {
  let set1 = [];
  let set2 = [];
  for (let i = Math.min(...numbers); i < Math.max(...numbers); i++) {
    set1.push(i);
  }

  for (let i = 0; i < set1.length; i++) {
    if (numbers.includes(set1[i])) {
      continue;
    } else {
      set2.push(set1[i]);
    }
  }
  console.log(set2);
}
findMissingNumbers([-2,2, 1, 9, 5, 7, 3, 10]);

var a = 1;
function first() {
  console.log(a);

  console.log(a);
}
function third() {
    console.log(this)
}
function second() {
    console.log(this)
    third()
}
function first(){
    console.log(this)
    second();
}
first();

const array=['Hello'];
const mutable = array=>{
    return array+" world!";
}
console.log(mutable(array));
console.log(`Mi array despues de la funcion: ${array}`)