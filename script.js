window.addEventListener("load", function () {
  var audio = document.getElementById("background-audio");
  audio.muted = false; // Remove a mutação para iniciar o áudio
  audio.play(); // Garante que o áudio comece a tocar
});

// Função para ativar ou desativar o áudio
document.getElementById("mute-btn").addEventListener("click", function () {
  var audio = document.getElementById("background-audio");
  var icon = document.getElementById("audio-icon");

  if (audio.muted) {
    audio.muted = false;
    icon.src = "assets/volume.png"; // Ícone de áudio ligado
    icon.alt = "Audio On";
  } else {
    audio.muted = true;
    icon.src = "assets/volume-mute.png"; // Ícone de áudio desligado
    icon.alt = "Audio Off";
  }
});

const video = document.getElementById('background-video');
// Aumenta para fullscreen quando o cursor entra no vídeo
video.addEventListener('mouseenter', () => {
  video.classList.add('fullscreen');
});

// Retorna ao tamanho original quando o cursor sai do vídeo
video.addEventListener('mouseleave', () => {
  video.classList.remove('fullscreen');
});

