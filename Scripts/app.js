var video = document.getElementById("myVideo");
var audio = document.getElementById("myAudio");

  video.addEventListener('play', function() {
    audio.pause();
  });

  video.addEventListener('pause', function() {
    audio.play();
  });