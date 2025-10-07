const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');

const suma = document.querySelector('#suma');
const roznica = document.querySelector('#roznica');
const iloczyn = document.querySelector('#iloczyn');
const iloraz = document.querySelector('#iloraz');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const a = parseFloat(liczba_a.value);
  const b = parseFloat(liczba_b.value);

  if (isNaN(a) || isNaN(b)) {
    alert("Wprowadź poprawne liczby!");
    return;
  }

  suma.textContent = a + b;
  roznica.textContent = a - b;
  iloczyn.textContent = a * b;
  iloraz.textContent = b !== 0 ? (a / b).toFixed(2) : "Nie dziel przez 0!";
});
