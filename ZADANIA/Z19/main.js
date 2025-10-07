const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  let x = parseFloat(liczba_x.value);


  let p = (x ** 2) / ((1 + Math.abs(x)) ** 2);

  wynik.classList.add('show');
  wynik.textContent = `
        x = ${x}
        wynik ${p}
    `;
});
