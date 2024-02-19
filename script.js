let participants = [];

function startRegistration() {
    // Validação do formulário inicial
    const responsibleName = document.getElementById('responsibleName').value;
    const locality = document.getElementById('locality').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;

    if (!responsibleName || !locality || !validateEmail(email) || !validateWhatsApp(whatsapp)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Esconde o formulário inicial e mostra o de participantes
    document.getElementById('registrationForm').style.display = 'none';
    const participantsForm = document.getElementById('participantsForm');
    participantsForm.style.display = 'block';
    addParticipantForm();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function validateWhatsApp(whatsapp) {
    // Exemplo simples de validação de número de WhatsApp brasileiro
    const re = /^\(\d{2}\)\s9?\d{4}-\d{4}$/;
    return re.test(whatsapp);
}

function addParticipantForm() {
    const form = document.getElementById('participantsForm');
    if(participants.length >= 30) {
        alert("Número máximo de participantes atingido.");
        return;
    }
    form.innerHTML += `
        <div>
            <input type="text" placeholder="Nome Completo">
            <input type="number" placeholder="Idade" min="0" max="999">
            <select>
                <option value="">Sexo</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>
            <select>
                <option value="">Precisa de hospedagem?</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        </div>
    `;
    form.innerHTML += '<button onclick="addParticipant()">Adicionar novo participante</button>';
    form.innerHTML += '<button onclick="reviewAndSubmit()">Revisar e Enviar</button>';
}

function addParticipant() {
    // Aqui você pode adicionar a lógica para salvar os dados do participante
    // e chamar addParticipantForm() para adicionar um novo formulário de participante
}

function reviewAndSubmit() {
    // Aqui você pode adicionar a lógica para revisar e enviar os dados
}

