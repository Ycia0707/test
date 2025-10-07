const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#iloraz');
const btn = document.querySelector('button');

function caleNaMM() {
  const cale = parseFloat(liczba_a.value);
  if (isNaN(cale)) {
    wynik.textContent = 'Podaj liczbę!';
  } else {
    const milimetry = cale * 25.4;
    wynik.textContent = milimetry.toFixed(2);
  }
}

btn.addEventListener('click', caleNaMM);
