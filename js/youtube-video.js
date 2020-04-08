var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  var time = format_time(event.target.getDuration());  
  document.getElementById('video-duration').innerHTML = time;
}

let video_frontEnd_img = document.getElementsByClassName("front-video")[0];
function onPlayerStateChange(event) {
  if(player.getPlayerState() == 0) {
    video_frontEnd_img.classList.remove("hide");
  }
}
function format_time(time) {
  let min = Math.floor(time/60);
  if(min >= 10) {
    time = "" + min + ":" + time%60;
  }
  else {
    time = "0" + min + ":" + time%60;
  }
  return time;
}

let btn_present = document.getElementById("btn-play");
btn_present.addEventListener("click", function() {
  video_frontEnd_img.classList.add("hide");
  player.playVideo();
}, false);