const liczba_a = document.querySelector('#liczba_a'); // pole na °C
const wynik = document.querySelector('#wynik');       // miejsce na wynik
const btn = document.querySelector('button');         // przycisk

btn.addEventListener('click', () => {
  const c = parseFloat(liczba_a.value); // pobranie i konwersja na liczbę

  if (isNaN(c)) {
    wynik.textContent = "❗ Podaj poprawną liczbę.";
    return;
  }

  const k = c + 273.15;           // stopnie Kelwina
  const f = (c * 9/5) + 32;       // stopnie Fahrenheita

  wynik.textContent = `Temperatura:
  ${c.toFixed(2)} °C = ${k.toFixed(2)} K = ${f.toFixed(2)} °F`;
});
