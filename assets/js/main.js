document.addEventListener('DOMContentLoaded', function() {

    const cpfInput = document.querySelector('.input-cpf');
    const btnSubmit = document.querySelector('.btn-submit');
    const result = document.querySelector('.result');
    
    btnSubmit.addEventListener('click', function() {
    
        result.innerHTML = cpfInput.value;
    })

});


