function frequency(string) {
  let set1 = [];
  for (let i = 0; i < string.length; i++) {
    if (set1.includes(string[i])) continue;
    else {
      let suma = 0;
      for (let j = 0; j < string.length; j++) {
        if (string[j] == string[i]) {
          suma += 1;
        }
      }
      set1.push([string[i], suma]);
    }
  }
  set1.sort();
  dic1 = {};
  for (let clave of set1) {
    dic1[clave[0]] = clave[1];
  }
  return dic1;
}

console.log("Test 1:", frequency("cccbbbaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
