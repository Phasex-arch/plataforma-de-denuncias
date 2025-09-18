document.addEventListener('DOMContentLoaded', function() {
    const reportCards = document.querySelectorAll('.report-card');
    const moreReportsBtn = document.querySelector('.more-reports-container');
    const maxVisible = 4; // Número máximo de denúncias visíveis inicialmente
    
    // Se houver mais denúncias que o máximo visível
    if (reportCards.length > maxVisible) {
        // Mostrar apenas as primeiras 'maxVisible' denúncias
        for (let i = maxVisible; i < reportCards.length; i++) {
            reportCards[i].classList.add('hidden-report');
        }
        
        // Mostrar o botão "Mais Denúncias"
        moreReportsBtn.style.display = 'block';
    }
});