const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const liczba_c = document.querySelector('#liczba_c');
const liczba_d = document.querySelector('#liczba_d');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  const a = parseFloat(liczba_a.value);
  const b = parseFloat(liczba_b.value);
  const c = parseFloat(liczba_c.value);
  const d = parseFloat(liczba_d.value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    wynik.textContent = "Wpisz wszystkie liczby!";
    return;
  }

  if (a < 0 || b < 0 || c < 0 || d < 0) {
    wynik.textContent = "Średnia geometryczna wymaga liczb nieujemnych.";
    return;
  }

  const srednia = Math.pow(a * b * c * d, 1/4);
  wynik.textContent = "Średnia geometryczna = " + srednia.toFixed(4);
});