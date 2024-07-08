document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-services-btn');
    const serviceList = document.querySelector('.service-list');

    toggleButton.addEventListener('click', function () {
        serviceList.classList.toggle('expanded');
        if (serviceList.classList.contains('expanded')) {
            toggleButton.textContent = 'Mostrar menos';
        } else {
            toggleButton.textContent = 'Conheça todos nossos serviços';
        }
    });
});