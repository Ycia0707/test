const stopnie = document.querySelector('#stopnie');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
  let s = parseInt(stopnie.value);
  let radiany = s * Math.PI/180;
  wynik.innerHTML =
    `
  podany kąt w stopniach: ${s}<sup>o</sup><br>
    kąt w radianach: ${radiany}<br>
    `
})