var vid = document.getElementById("theVid");

vid.onpause = function() {
	vid.play();
};

vid.onended = function() {
	vid.load();
	vid.play();
};

vid.onvolumechange = function() {
	vid.muted = false;
	vid.volume = 1;
};