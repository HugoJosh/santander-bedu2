function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  suma = 0;
  if (typeof obj1 == "object" && typeof obj2 == "object") {
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
      for (let clave of Object.keys(obj1)) {
        if (
          Object.keys(obj2).includes(clave) &&
          deepEqual(Object.keys(obj1)[clave], Object.keys(obj2)[clave])
        ) {
          suma += 1;
        } else return false;
      }
      if (Object.keys(obj1).length == suma) {
        return true;
      } else return false;
    }else return false
  } else {
    return false;
  }
}
const john = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false
