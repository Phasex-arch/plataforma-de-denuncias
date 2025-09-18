// Validações específicas para o formulário administrativo
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formreportAdministrativa');
    const cnpjInput = document.getElementById('cnpj');
    const cnpjError = document.querySelector('.cnpj-error');
    const dataInput = document.getElementById('data');

    // Validar CNPJ no blur
    if (cnpjInput && cnpjError) {
        cnpjInput.addEventListener('blur', function() {
            const cnpjDigits = this.value.replace(/\D/g, '');
            
            if (cnpjDigits.length > 0 && cnpjDigits.length !== 14) {
                cnpjError.textContent = 'CNPJ deve ter 14 dígitos';
                cnpjError.style.display = 'block';
            } else {
                cnpjError.style.display = 'none';
            }
        });

        // Mostrar erro ao digitar caractere não numérico
        cnpjInput.addEventListener('input', function(e) {
            if (e.inputType === 'insertText' && isNaN(e.data)) {
                cnpjError.textContent = 'Digite apenas números';
                cnpjError.style.display = 'block';
                
                // Remover o caractere não numérico
                setTimeout(() => {
                    this.value = this.value.replace(/[^\d\.\/\-]/g, '');
                    cnpjError.style.display = 'none';
                }, 100);
            }
        });
    }

    // Validar data no blur
    if (dataInput) {
        dataInput.addEventListener('blur', function() {
            const dataDigits = this.value.replace(/\D/g, '');
            
            if (dataDigits.length > 0 && dataDigits.length !== 8) {
                let errorElement = document.getElementById('data-error');
                if (!errorElement) {
                    errorElement = document.createElement('div');
                    errorElement.id = 'data-error';
                    errorElement.className = 'error-message';
                    errorElement.style.color = 'red';
                    errorElement.style.fontSize = '12px';
                    errorElement.style.marginTop = '5px';
                    this.parentNode.appendChild(errorElement);
                }
                errorElement.textContent = 'Data deve ter 8 dígitos (DDMMAAAA)';
                errorElement.style.display = 'block';
            } else {
                const errorElement = document.getElementById('data-error');
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
            }
        });
    }

    // Validação do formulário
    if (form) {
        form.addEventListener('submit', function(e) {
            let isValid = true;

            // Validar CNPJ
            if (cnpjInput && cnpjInput.value) {
                const cnpjDigits = cnpjInput.value.replace(/\D/g, '');
                if (cnpjDigits.length !== 14) {
                    cnpjError.textContent = 'CNPJ deve ter 14 dígitos';
                    cnpjError.style.display = 'block';
                    isValid = false;
                    cnpjInput.focus();
                }
            }

            // Validar data
            if (dataInput && dataInput.value) {
                const dataDigits = dataInput.value.replace(/\D/g, '');
                if (dataDigits.length !== 8) {
                    let errorElement = document.getElementById('data-error');
                    if (!errorElement) {
                        errorElement = document.createElement('div');
                        errorElement.id = 'data-error';
                        errorElement.className = 'error-message';
                        errorElement.style.color = 'red';
                        errorElement.style.fontSize = '12px';
                        errorElement.style.marginTop = '5px';
                        dataInput.parentNode.appendChild(errorElement);
                    }
                    errorElement.textContent = 'Data deve ter 8 dígitos (DDMMAAAA)';
                    errorElement.style.display = 'block';
                    isValid = false;
                    dataInput.focus();
                }
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});

// Funções auxiliares para validação visual
function showError(element, message) {
    const errorElement = document.getElementById(element.id + '-error') || createErrorElement(element);
    errorElement.textContent = message;
    errorElement.classList.add('show');
    element.classList.add('validation-error');
    element.classList.remove('validation-success');
}

function hideError(element) {
    const errorElement = document.getElementById(element.id + '-error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    element.classList.remove('validation-error');
    element.classList.add('validation-success');
}

function createErrorElement(inputElement) {
    const errorElement = document.createElement('div');
    errorElement.id = inputElement.id + '-error';
    errorElement.className = 'error-message';
    inputElement.parentNode.appendChild(errorElement);
    return errorElement;
}

// Adicione esta função para limpar todos os erros
function clearAllErrors() {
    document.querySelectorAll('.error-message, .cnpj-error').forEach(error => {
        error.classList.remove('show');
    });
    document.querySelectorAll('.validation-error').forEach(input => {
        input.classList.remove('validation-error');
    });
}

// No evento blur do CNPJ
cnpjInput.addEventListener('blur', function() {
    const cnpjDigits = this.value.replace(/\D/g, '');
    
    if (cnpjDigits.length > 0 && cnpjDigits.length !== 14) {
        showError(this, 'CNPJ deve ter 14 dígitos');
    } else {
        hideError(this);
    }
});

// No evento input do CNPJ
cnpjInput.addEventListener('input', function(e) {
    if (e.inputType === 'insertText' && isNaN(e.data)) {
        showError(this, 'Digite apenas números');
        
        setTimeout(() => {
            this.value = this.value.replace(/[^\d\.\/\-]/g, '');
            hideError(this);
        }, 100);
    }
});