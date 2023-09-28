function switchVideo(mp4, webm, ogv) {
document.getElementById('videoPlayer').innerHTML = '<source src="' + mp4 +'" type="video/mp4"><source src="' + webm +'" type="video/webm"><source src="' + ogv +'" type="video/ogg">';
document.getElementById('videoPlayer').load();
document.getElementById('videoPlayer').play();
}