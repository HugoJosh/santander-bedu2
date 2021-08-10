const Vec = function (x, y) {
  this.x = x;
  this.y = y;
  this.length = function () {
    return Math.sqrt(x ** 2 + y ** 2);
  };
  this.plus = function (v2) {
    const v3 = new Vec(v2.x + this.x, v2.y + this.y);
    return v3;
  };
  this.minus = function (v2) {
    const v3 = new Vec(-v2.x + this.x, -v2.y + this.y);
    return v3;
  };
};

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979

const Group = function (arr) {
  this.members = arr;
  this.has = function (x) {
    return this.members.includes(x);
  };

  this.add = function (x) {
    if (this.has(x)) {
      return;
    }
    this.members.push(x);
  };
};
Group.from = function (arr) {
  const group = new Group(arr);
  return group;
};

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true

const Persona = function (casa, escula) {
  this.casa = casa;
  this.escula = escula;
};
const p2 = function (hora, casa) {
  Persona.call(this, casa); //hereda todos
  this.hora = hora;
};
const p3 = new p2("sepa", "sepa2");

console.log(p3);

const Triangle = function (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

const triangle = new Triangle(1, 2, 3);

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};
console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6

