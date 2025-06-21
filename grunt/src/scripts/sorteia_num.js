function pega_valor() {
    const numero = document.getElementById('number').value;
    let number = parseInt(numero);

    return Math.floor(Math.random() * number);
}
function cria_p() {
    const p = document.createElement('p');
    p.innerHTML = `O número sorteado foi: ${pega_valor()}`;
    return p;
}

function carrega_dado() {
    let count = 0;
    const botao = document.getElementById('botao');
    botao.addEventListener('click', function (e) {
        e.preventDefault();
        const div_resultado = document.getElementsByClassName('resultado')[0];
        count++;
        if ((count % 2 == 0)) {
            div_resultado.innerHTML = '';
        } else {
            div_resultado.append(cria_p());

        }
        !pega_valor() ? div_resultado.innerHTML = '' : div_resultado;
    })

}

document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    carrega_dado();
})