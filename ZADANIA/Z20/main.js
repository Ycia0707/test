const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Podaj liczbę: ', (a) => {
  let aInt = parseInt(parseFloat(a));
  console.log(`Liczba całkowita: ${aInt}`);
  console.log(`Kwadrat: ${aInt ** 2}`);
  console.log(`Sześcian: ${aInt ** 3}`);
  readline.close();
});

let a = prompt("Podaj liczbę:");

a = parseFloat(a);

let aInt = parseInt(a);

let kwadrat = aInt ** 2;
let szescian = aInt ** 3;

alert("Liczba całkowita: " + aInt +
  "\nKwadrat: " + kwadrat +
  "\nSześcian: " + szescian);
