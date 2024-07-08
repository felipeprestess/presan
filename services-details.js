document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.read-more-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const service = this.closest('.service');
            const details = service.querySelector('.service-details');
        service.classList.toggle('open');
        if (service.classList.contains('open')) {
            details.style.display = 'block';
            details.style.maxHeight = details.scrollHeight + 'px';
            this.textContent = 'Mostrar Menos';
        } else {
            details.style.maxHeight = '0';
            setTimeout(() => {
                details.style.display = 'none';
            }, 500); // Tempo de transição
            this.textContent = 'Saiba Mais';
        }
        });
    });
});