document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const dateInput = document.getElementById('date').value;
    const correctDate = "11/06"; // Coloque a data do seu aniversário aqui

    if (dateInput === correctDate) {
        document.getElementById('message').innerText = "Acesso liberado! 🎉";
        
        // Redireciona após 2 segundos
        setTimeout(function() {
            window.location.href = "tela1.html"; // Altere para o nome da sua página
        }, 2000);
    } else {
        document.getElementById('message').innerText = "Data incorreta. Tente novamente.";
    }
});
