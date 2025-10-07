const liczba_a = document.querySelector(`#liczba_a`);
const liczba_b = document.querySelector(`#liczba_b`);

const wynik = document.querySelector(`#iloraz`);
const btn = document.querySelector(`button`);

btn.addEventListener('click', function() {
  let a = parseInt(liczba_a.value);
  let b = parseInt(liczba_b.value);

  let iloraz = a / b;

  wynik.innerHTML = `
  a = ${a}<br>
  b = ${b}<br>

iloraz = ${iloraz}<br>`

})