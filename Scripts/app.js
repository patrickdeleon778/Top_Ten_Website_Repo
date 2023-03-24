var video = document.getElementById("myVideo");
var audio = document.getElementById("myAudio");

  video.addEventListener('play', function() {
    audio.pause();
  });

  video.addEventListener('pause', function() {
    audio.play();
  });

  // This is what I tried to work on but wasn't able to get it to work lol