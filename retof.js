let c = document.querySelector(".container");
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    let cell = document.createElement("section");
    cell.className = "cell";
    cell.id = `${i}${j}`;
    c.appendChild(cell);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function ciclo(inicio) {
  let id = 0;
  let aux=-3;
  let init = document.getElementById(`${inicio}${id}`);
  init.className = "active-head cell";
  setTimeout(() => {}, 500);
  setInterval(function () {
    init.className = "active cell";
    id = id + 1;
    if(id==10){
        id=0;
    }
    
    init = document.getElementById(`${inicio}${id}`);
    init.className = "active-head cell";
    if(aux==10){
        aux=0
    }
    if(aux>=0){
        init = document.getElementById(`${inicio}${aux}`);
        init.className = "cell";
    }
    aux=aux+1;
    init = document.getElementById(`${inicio}${id}`);
  }, 500);
}

ciclo(random(0, 9));

// if(i==inicio+1){

// }
