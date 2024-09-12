window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    audio.muted = false; // Remove a mutação para iniciar o áudio
    audio.play(); // Garante que o áudio comece a tocar
});