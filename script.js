<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("registrationForm").addEventListener("submit", function(e) {
            e.preventDefault(); // Impede o envio do formulário

            // Validar campos aqui
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let participants = document.getElementById("participants").value;

            if (!name || !email || participants <= 0) {
                alert("Por favor, preencha todos os campos corretamente.");
                return false;
            }

            // Se a validação for bem-sucedida, você pode prosseguir com o envio do formulário
            // Por exemplo, enviar via AJAX ou exibir uma mensagem de sucesso
            alert("Inscrição realizada com sucesso!");

            // Resetar o formulário ou redirecionar o usuário, etc.
            // document.getElementById("registrationForm").reset();
        });
    });
</script>
