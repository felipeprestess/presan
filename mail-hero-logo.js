(function(){
    emailjs.init("4uMxZBAJjVBOQ2pX2");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_zbnaxmh', 'template_k5qbgya', this)
        .then(function() {
            alert('Email enviado com sucesso!');
        }, function(error) {
            alert('Ocorreu um erro ao enviar o email: ' + JSON.stringify(error));
        });
});