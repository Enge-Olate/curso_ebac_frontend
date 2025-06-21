function pega_valor() {
    const numero = document.getElementById('number').value;
    return numero;
}
function cria_p() {
    const p = document.createElement('p');
    p.innerHTML = `O número sorteado foi: ${pega_valor()}`;


    return p;
}

function carrega_dado() {
    const botao = document.getElementById('botao');
    botao.addEventListener('click', function (e) {
        e.preventDefault();
        const div_resultado = document.getElementsByClassName('resultado')[0];
        div_resultado.append(cria_p());
        // alert('ola');
    })

}

document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    carrega_dado();
})