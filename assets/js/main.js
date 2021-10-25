document.addEventListener('DOMContentLoaded', function() {

    const cpfInput = document.querySelector('.input-cpf');
    const btnSubmit = document.querySelector('.btn-submit');
    const result = document.querySelector('.result');
    
    btnSubmit.addEventListener('click', function() {
        const cpf = new CpfValidator(cpfInput.value);

        if (cpf.validator()) {
            result.innerHTML = 'CPF Válido!';

        } else {
            result.innerHTML = 'CPF Inválido!';
        }
       
    });


});


