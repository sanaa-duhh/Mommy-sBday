const voice = document.getElementById("voice");
let voiceReady = false;
let voicePlayed = false;

// Function to attempt playing the voice
function tryPlayVoice() {
  if (voiceReady && !voicePlayed) {
    voice.play().then(() => {
      voicePlayed = true;
    }).catch(() => {
      // still can't play, wait for another interaction
    });
  }
}

// Listen for any interaction
document.addEventListener("click", tryPlayVoice);
document.addEventListener("touchstart", tryPlayVoice);
document.addEventListener("scroll", tryPlayVoice);

function countdownToFiveSeconds() {
  let remaining = 5;

  const interval = setInterval(() => {
    if (remaining <= 0) {
      clearInterval(interval);

      // Hide countdown and show content
      document.getElementById('countdown-section').style.display = 'none';
      document.getElementById('photos-section').classList.remove('hidden');
      document.getElementById('voice-section').classList.remove('hidden');

      // Mark voice as ready to play
      voiceReady = true;

      // In case interaction already happened
      tryPlayVoice();
    } else {
      document.getElementById('timer').textContent = 
        `00:00:${String(remaining).padStart(2, '0')}`;
      remaining--;
    }
  }, 1000);
}

countdownToFiveSeconds();
