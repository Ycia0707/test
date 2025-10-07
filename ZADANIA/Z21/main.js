const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_h = document.querySelector('#h');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let h = parseInt(liczba_h.value);

    let p = ((a + b) / 2) * h;
    wynik.classList.add('show');
    wynik.textContent =
        `
        a=${a}
    b=${b}
    h=${h}
    Pole trójkąta wynosi: ${p};
    `

});

