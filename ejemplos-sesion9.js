let data = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

const container = document.getElementById("mountains");
const tabla = document.createElement("table");
let tbdy = document.createElement("tbody");
let tr = document.createElement("tr");
for (let i in data[0]) {
  let th = document.createElement("th");
  th.appendChild(document.createTextNode(i));
  tr.appendChild(th);
}
tbdy.appendChild(tr);

for (let i in data) {
  let tr = document.createElement("tr");
  for (let d in data[i]) {
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(data[i][d]));
    tr.appendChild(td);
  }
  tbdy.appendChild(tr);
}
tabla.appendChild(tbdy);
container.appendChild(tabla);

// let b = document.querySelectorAll("img");
// // b.forEach((p) => {
// //   const node = document.createElement("p");
// //   const text = document.createTextNode(p.alt);
// //   node.appendChild(text);
// //   p.remove();
// //   document.body.appendChild(node);
// // });
// b.forEach((img) => {
//     const p=document.createElement("p")
//     p.innerHTML =img.alt
//     img.replaceWith(p)
// })
