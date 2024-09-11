function checkAnswer() {
    const correctAnswer = "respiração";
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');

    if (userAnswer === correctAnswer) {
        window.location.href = 'tesouro.html'; // Redireciona para a página do tesouro
    } else {
        messageElement.textContent = 'Resposta incorreta. Tente novamente!';
    }
}
