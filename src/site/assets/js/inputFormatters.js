// Funções de formatação
function formatarCNPJ(value) {
    if (!value) return '';
    
    // Remove tudo que não é dígito
    const digits = value.replace(/\D/g, '');
    
    // Limita a 14 dígitos
    const limitedDigits = digits.slice(0, 14);
    
    // Aplica a formatação
    if (limitedDigits.length <= 2) {
        return limitedDigits;
    } else if (limitedDigits.length <= 5) {
        return limitedDigits.replace(/^(\d{2})(\d+)/, '$1.$2');
    } else if (limitedDigits.length <= 8) {
        return limitedDigits.replace(/^(\d{2})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (limitedDigits.length <= 12) {
        return limitedDigits.replace(/^(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4');
    } else {
        return limitedDigits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5');
    }
}

function formatarData(value) {
    if (!value) return '';
    
    const digits = value.replace(/\D/g, '');
    const limitedDigits = digits.slice(0, 8);
    
    if (limitedDigits.length <= 2) {
        return limitedDigits;
    } else if (limitedDigits.length <= 4) {
        return limitedDigits.replace(/^(\d{2})(\d+)/, '$1/$2');
    } else {
        return limitedDigits.replace(/^(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    }
}

function formatarTelefone(value) {
    if (!value) return '';
    
    const digits = value.replace(/\D/g, '');
    const limitedDigits = digits.slice(0, 11);
    
    if (limitedDigits.length <= 2) {
        return limitedDigits;
    } else if (limitedDigits.length <= 6) {
        return limitedDigits.replace(/^(\d{2})(\d+)/, '($1) $2');
    } else if (limitedDigits.length <= 10) {
        return limitedDigits.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
    } else {
        return limitedDigits.replace(/^(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
    }
}

// Aplicar formatação em tempo real
document.addEventListener('DOMContentLoaded', function() {
    // CNPJ
    const cnpjInput = document.getElementById('cnpj');
    if (cnpjInput) {
        cnpjInput.addEventListener('input', function(e) {
            const cursorPosition = this.selectionStart;
            const oldValue = this.value;
            
            // Formatar o valor
            this.value = formatarCNPJ(this.value);
            
            // Ajustar posição do cursor
            const newCursorPosition = cursorPosition + (this.value.length - oldValue.length);
            this.setSelectionRange(newCursorPosition, newCursorPosition);
        });
    }

    // Data
    const dataInput = document.getElementById('data');
    if (dataInput) {
        dataInput.addEventListener('input', function(e) {
            const cursorPosition = this.selectionStart;
            const oldValue = this.value;
            
            this.value = formatarData(this.value);
            
            const newCursorPosition = cursorPosition + (this.value.length - oldValue.length);
            this.setSelectionRange(newCursorPosition, newCursorPosition);
        });
    }

    // Telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            const cursorPosition = this.selectionStart;
            const oldValue = this.value;
            
            this.value = formatarTelefone(this.value);
            
            const newCursorPosition = cursorPosition + (this.value.length - oldValue.length);
            this.setSelectionRange(newCursorPosition, newCursorPosition);
        });
    }
});