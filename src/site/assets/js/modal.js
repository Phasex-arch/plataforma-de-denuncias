// Modal de protocolo
const protocolModal = document.getElementById('protocolModal');
const protocolNumber = document.getElementById('protocolNumber');
const closeModal = document.getElementById('closeModal');
const copyProtocol = document.getElementById('copyProtocol');
const newComplaint = document.getElementById('newComplaint');

function generateProtocolNumber() {
    const date = new Date();
    const dateStr = date.toISOString().replace(/-/g, '').substring(0, 8);
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${dateStr}-${randomStr}`;
}

function showProtocolModal() {
    protocolNumber.textContent = generateProtocolNumber();
    protocolModal.classList.add('active');
}

function hideProtocolModal() {
    protocolModal.classList.remove('active');
}

closeModal.addEventListener('click', hideProtocolModal);

copyProtocol.addEventListener('click', function() {
    navigator.clipboard.writeText(protocolNumber.textContent)
        .then(() => {
            const originalText = copyProtocol.innerHTML;
            copyProtocol.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(() => {
                copyProtocol.innerHTML = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
});

newComplaint.addEventListener('click', function() {
    hideProtocolModal();
    document.getElementById('formreportAdministrativa').reset();
    companyInfo.style.display = 'none';
});

// Fechar modal clicando fora dele
protocolModal.addEventListener('click', function(e) {
    if (e.target === protocolModal) {
        hideProtocolModal();
    }
});