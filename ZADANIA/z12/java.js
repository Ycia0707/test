
function liczba_losowa(min, max) {
  return Math.floor(Math.random() * (max - min+1) + min);
}

const min_liczba = document.querySelector('#min');
const max_liczba = document.querySelector('#max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let min = parseInt(min_liczba.value);
  let max = parseInt(max_liczba.value);

  let p1 = liczba_losowa(min, max);
  let p2 = liczba_losowa(min, max);
  let p3 = liczba_losowa(min, max);
  let p4 = liczba_losowa(min, max);
  let p5 = liczba_losowa(min, max);

  let suma = p1 + p2 + p3 + p4 + p5 + p5;
  let iloczyn = p1*p2*p3*p4*p5
  let srednia = suma/5;


  wynik.innerHTML = `
  p1 = ${p1}<br>
  p2 = ${p2}<br>
  p3 = ${p3}<br>
  p4 = ${p4}<br>
  p5 = ${p5}<br>
  
  suma = ${suma}<br>
  iloczyn = ${iloczyn}<br>
  srednia = ${srednia}<br>

`

})


