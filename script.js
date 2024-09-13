window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    audio.muted = false; // Remove a mutação para iniciar o áudio
    audio.play(); // Garante que o áudio comece a tocar
});

// Função para ativar ou desativar o áudio
document.getElementById('mute-btn').addEventListener('click', function() {
    var audio = document.getElementById('background-audio');
    
    if (audio.muted) {
        audio.muted = false;
        this.textContent = 'Desativar áudio';
    } else {
        audio.muted = true;
        this.textContent = 'Ativar áudio';
    }
});
