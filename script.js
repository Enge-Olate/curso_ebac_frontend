document.getElementById('form').addEventListener(
    'submit',
    function validar(e){
        e.preventDefault()
        let a = document.getElementById('campoA').value
        let b = document.getElementById('campoB').value
        if(b > a){
            document.getElementById('res').innerText='Válido:)'
            document.getElementById('res').style.color='green'
        }else{
            document.getElementById('res').innerText='Inválido:( campo B precisa ser maior!'
            document.getElementById('res').style.color='red'
        }

    }
)