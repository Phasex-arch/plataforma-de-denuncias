// Função para mostrar sugestões
function showSuggestions(inputElement, suggestions, containerId) {
    const container = document.getElementById(containerId);
    const value = inputElement.value.toLowerCase();
    
    if (value.length < 2) {
        container.style.display = 'none';
        return;
    }
    
    const filtered = suggestions.filter(item => 
        item.toLowerCase().includes(value)
    );
    
    if (filtered.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.innerHTML = '';
    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.textContent = item;
        div.addEventListener('click', () => {
            inputElement.value = item;
            container.style.display = 'none';
        });
        container.appendChild(div);
    });
    
    container.style.display = 'block';
}

// Adicionar event listeners para mostrar sugestões
const estadoEmpresaInput = document.getElementById('estado-empresa');
const cidadeEmpresaInput = document.getElementById('cidade-empresa');
const estadoOrgaoInput = document.getElementById('estado-orgao');
const cidadeOrgaoInput = document.getElementById('cidade-orgao');
const orgaoInput = document.getElementById('orgao');

estadoEmpresaInput.addEventListener('input', () => {
    showSuggestions(estadoEmpresaInput, estadosBrasileiros, 'estado-suggestions');
});

cidadeEmpresaInput.addEventListener('input', () => {
    showSuggestions(cidadeEmpresaInput, cidadesComuns, 'cidade-suggestions');
});

estadoOrgaoInput.addEventListener('input', () => {
    showSuggestions(estadoOrgaoInput, estadosBrasileiros, 'estado-orgao-suggestions');
});

cidadeOrgaoInput.addEventListener('input', () => {
    showSuggestions(cidadeOrgaoInput, cidadesComuns, 'cidade-orgao-suggestions');
});

orgaoInput.addEventListener('input', () => {
    showSuggestions(orgaoInput, orgaosPublicos, 'orgao-suggestions');
});

// Fechar sugestões ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.matches('.suggestions-container input')) {
        document.querySelectorAll('.suggestions-list').forEach(container => {
            container.style.display = 'none';
        });
    }
});