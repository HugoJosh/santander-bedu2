// const colors=['red','blue','green']
// console.table(colors)
// colors.push("gray")
// // colors=['red1','blue1','green1',"do"]
// colors[0]="a"
// console.table(colors)
// console.log(colors.length)

const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
let prom=0;

for(const num of numbers){
    prom+=num;
}
prom=prom/numbers.length;
console.log(prom)

const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }
  
  const keys = Object.keys(car)
  const pairs = []
  
  for(let i = 0; i < keys.length; i++) {
    pairs.push( [keys[i], car[keys[i]]] )
  }

  const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
  let objeto={}
  for(let i = 0; i < car.length; i++){
    objeto[`${car[i][0]}`] = car[i][1]
  }
  console.table(objeto)

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

  let {firstName,lastName,links}=person
  let {web,social}=links
  let {facebook,instagram}=social
  person.links.social={facebook:"fb",instagram:"instagram"}
  console.log(facebook," y ",instagram)
  console.table(person.links.social)

  const book = {
    author: 'Marijn Haverbeke',
    title: 'Eloquent JavaScript',
    year: 2018
  };
  
  const copyOfBook = { ...book };
  
  console.log(copyOfBook); 
  // { author: "Marijn Haverbeke", title: "Eloquent JavaScript", year: 2018 }