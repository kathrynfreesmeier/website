if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	console.log("phonneeeesssssss")
	setTimeout(function () {
	    window.location.href = "http://m.youtube.com/watch?v=dQw4w9WgXcQ";
	}, 6000);	
} else {
		setTimeout(function () {
	    window.location.href = "http://m.youtube.com/watch?v=dQw4w9WgXcQ";
	}, 3000);
}


particlesJS.load('particles-js', 'static/js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});