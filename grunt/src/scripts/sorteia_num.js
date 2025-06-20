function sorteio(max) {

    return Math.floor(Math.random() * max);
}
console.log(sorteio(100));
let pega_valor = document.getElementById('number').value;
let p = sorteio(pega_valor);
document.createElement('p').innerHTML=p;