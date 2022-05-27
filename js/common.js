// $('body').hid
$('#about_input').keyup(function(){
	var len = $(this).val().length;
	$("#counter").html(len + " / 200");
});
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
$("body").bind('mousemove', function(e){

	e.preventDefault();
	if (window.addEventListener) // older FF
	window.addEventListener('mousemove', preventDefault, {passive: false});
	e.preventDefault();
	window.onmousemove = preventDefault; // modern standard
	window.onmousemove = document.onmousewheel = preventDefault; // older browsers, IE
	const scaleItems = [0.99999, 1.12317381, 1.238273872]
	const scaleItems2 = [0.99999, 1.12317381, 1.238273872]

	const x = `${e.clientX / 2 + window.innerHeight}px`;
	const y = `${e.clientY /2 + window.innerHeight}px`;
	const circle = document.getElementById('circle-light');
	circle.style.top = e.clientY - circle.clientWidth / 2 + 'px';
	circle.style.left = e.clientX - circle.clientWidth / 2 + 'px';
	circle.style.transform = `scale(${scaleItems[Math.floor(Math.random()*scaleItems.length)]}, ${scaleItems2[Math.floor(Math.random()*scaleItems2.length)]})`;
	circle.style.backgroundPositionX = x;
	circle.style.backgroundPositionY = y;
	return false;
});
  
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	 //>=, not <=
	if (scroll >= 100) {
			//clearHeader, not clearheader - caps H
			$("header .logo").addClass("active");
			$(".menuBtn").addClass("active");
	} else {
		$(".menuBtn").removeClass("active");
		$("header .logo").removeClass("active");
	}
});