function playAudio(playerNumber) {
  var audioPlayer = document.getElementById("audioPlayer");
  var audioPlayer2 = document.getElementById("audioPlayer2");

  // Menghentikan pemutaran dan mengatur ulang ke awal untuk kedua audio
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  audioPlayer2.pause();
  audioPlayer2.currentTime = 0;

  if (playerNumber === 1) {
    audioPlayer.play(); // Memulai pemutaran lagu 1
  } else if (playerNumber === 2) {
    audioPlayer2.play(); // Memulai pemutaran lagu 2
  }
}