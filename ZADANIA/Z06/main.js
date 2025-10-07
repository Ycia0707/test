const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const liczba_c = document.querySelector('#liczba_c');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  const a = parseFloat(liczba_a.value);
  const b = parseFloat(liczba_b.value);
  const c = parseFloat(liczba_c.value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    wynik.textContent = "Wpisz wszystkie trzy boki!";
    return;
  }

  // sprawdzamy warunek trójkąta
  if (a + b <= c || a + c <= b || b + c <= a) {
    wynik.textContent = "Z podanych boków nie da się zbudować trójkąta.";
    return;
  }

  const s = (a + b + c) / 2;
  const pole = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  wynik.textContent = "Pole trójkąta = " + pole.toFixed(4);
});