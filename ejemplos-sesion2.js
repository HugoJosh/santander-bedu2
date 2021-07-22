const time = 24;
let greeting;
if (time < 0 || time > 24) {
  greeting = "Error";
} else if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting); // Good afternoon

const day = 2;
let text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";
}
console.log(text);

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0 && i != 0) {
    console.log(`${i} es par`);
  }
}

let primo = true;
for (let i = 0; i < 100; i++) {
  if (i == 0 || i == 1) {
    primo = false;
  }
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    console.log(`${i} es primo`);
  }
  primo = true;
}

let dia = 0.9;
let grosor=0;
if (dia > 1.4) {
  console.log("La rueda del vehiculo es para un vehiculo grande");
  if (grosor < 0.4) {
    console.log("El grosor para esta rueda es inferior al recomendado");
  }
} else if (dia > 0.8 && dia <= 1.4) {
  console.log("La rueda es para un vehículo mediano");
  if (grosor < 0.25) {
    console.log("El grosor para esta rueda es inferior al recomendado");
  }
} else {
  console.log("“La rueda es para un vehículo pequeño”.");
}
