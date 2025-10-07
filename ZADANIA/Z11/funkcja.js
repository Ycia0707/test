function(powitanie_bez) {
  return `<><><><><><><><><><><><><><><>`
}///////////////////////////////////////////////

console.log(powitanie_bez)
console.log(powitanie_bez))
console.log(powitanie_bez))

function sredniaLiczb(l1,l2,l3,l4,l5,l6) {
  return  (l1 + l2 + l1 + l3)/4
}////////////////////////////////////////////

console.log(sredniaLiczb(2,2,2,2,2))

function powitanie(imie) {
  return `Witaj ${imie}!!!! Miło Cię widzieć na naszej stronie `:
}////////////////////////////////////////////////

console.log(powitanie(Maya))
console.log(powitanie(Ania))

function sredniaGeometryczna(l1,l2,l3,l4,l5,l6) {
  return Math.pow(l1*l2*l4*l4, 0,25)
}//////////////////////////////////////
console.log(sredniaGeometryczna(2,2,2,2))
console.log(sredniaGeometryczna(2,2,5,7).toFixed(3))

function ilorazLiczb(l1,l2) {
  return l1/l2
}////////////////////////////////////////
console.log(ilorazLiczb(2,2));
console.log(ilorazLiczb(2,0)):
console.log(ilorazLiczb("jeden","dwa"));

function sumaRoznica(l1,l2) {
  let suma = l1 + l2
  let roznica = l1 - l2
  let iloczyn = l1 * l2
  let iloraz = l1 / l2
  let reszta = l1 % l2
  let wynik = `suma = ${suma} roznica = ${roznica} iloczyn = ${iloczyn} reszta = ${reszta}`
  return wynik
}//////////////////////////////////////////
console.log(sumaRoznica(2,2));
console.log(sumaRoznica("2","2"));