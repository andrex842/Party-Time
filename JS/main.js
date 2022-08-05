const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  },6000);
  
});
var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, drawCircle2, drawCircle3, i, range, xpos;
 NUM_CONFETTI = 40;
 COLORS = [
   [235, 90, 70],
   [97, 189, 79],
   [242, 214, 0],
   [0, 121, 191],
   [195, 119, 224]
 ];
 PI_2 = 2 * Math.PI;
 canvas = document.getElementById("confeti");
 context = canvas.getContext("2d");
 window.w = 0;
 window.h = 0;
 window.resizeWindow = function() {
   window.w = canvas.width = window.innerWidth;
   return window.h = canvas.height = window.innerHeight
 };
 window.addEventListener("resize", resizeWindow, !1);
 window.onload = function() {
   return setTimeout(resizeWindow, 0)
 };
 range = function(a, b) {
   return (b - a) * Math.random() + a
 };
 drawCircle = function(a, b, c, d) {
   context.beginPath();
   context.moveTo(a, b);
   context.bezierCurveTo(a - 17, b + 14, a + 13, b + 5, a - 5, b + 22);
   context.lineWidth = 2;
   context.strokeStyle = d;
   return context.stroke()
 };
 drawCircle2 = function(a, b, c, d) {
   context.beginPath();
   context.moveTo(a, b);
   context.lineTo(a + 6, b + 9);
   context.lineTo(a + 12, b);
   context.lineTo(a + 6, b - 9);
   context.closePath();
   context.fillStyle = d;
   return context.fill()
 };
 drawCircle3 = function(a, b, c, d) {
   context.beginPath();
   context.moveTo(a, b);
   context.lineTo(a + 5, b + 5);
   context.lineTo(a + 10, b);
   context.lineTo(a + 5, b - 5);
   context.closePath();
   context.fillStyle = d;
   return context.fill()
 };
 xpos = 0.9;
 document.onmousemove = function(a) {
   return xpos = a.pageX / w
 };
 window.requestAnimationFrame = function() {
   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
     return window.setTimeout(a, 5)
   }
 }();
 Confetti = function() {
   function a() {
     this.style = COLORS[~~range(0, 5)];
     this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
     this.r = ~~range(2, 6);
     this.r2 = 2 * this.r;
     this.replace()
   }
   a.prototype.replace = function() {
     this.opacity = 0;
     this.dop = 0.03 * range(1, 4);
     this.x = range(-this.r2, w - this.r2);
     this.y = range(-20, h - this.r2);
     this.xmax = w - this.r;
     this.ymax = h - this.r;
     this.vx = range(0, 2) + 8 * xpos - 5;
     return this.vy = 0.7 * this.r + range(-1, 1)
   };
   a.prototype.draw = function() {
     var a;
     this.x += this.vx;
     this.y += this.vy;
     this.opacity +=
       this.dop;
     1 < this.opacity && (this.opacity = 1, this.dop *= -1);
     (0 > this.opacity || this.y > this.ymax) && this.replace();
     if (!(0 < (a = this.x) && a < this.xmax)) this.x = (this.x + this.xmax) % this.xmax;
     drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
     drawCircle3(0.5 * ~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
     return drawCircle2(1.5 * ~~this.x, 1.5 * ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
   };
   return a
 }();
 confetti = function() {
   var a, b, c;
   c = [];
   i = a = 1;
   for (b = NUM_CONFETTI; 1 <= b ? a <= b : a >= b; i = 1 <= b ? ++a : --a) c.push(new Confetti);
   return c
 }();
 window.step = function() {
   var a, b, c, d;
   requestAnimationFrame(step);
   context.clearRect(0, 0, w, h);
   d = [];
   b = 0;
   for (c = confetti.length; b < c; b++) a = confetti[b], d.push(a.draw());
   return d
 };
 step();
 $(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});
$("#nosotrosa").click(function () {
  $("#ini").fadeOut("slow", function () {
    $("#bodas").fadeOut(50);
    $("#quince").fadeOut(50);
    $("#servi").fadeOut(50);
    $("#nos").fadeIn();
    TweenMax.from("#nos", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#nos", 0.4, { scale: 1, ease: "none" });

  });
});
$("#inicioa").click(function () {
  $("#nos").fadeOut("slow", function () {
    $("#bodas").fadeOut(50);
    $("#quince").fadeOut(50);
    $("#servi").fadeOut(50);
    $("#ini").fadeIn();
    TweenMax.from("#ini", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#ini", 0.4, { scale: 1, ease: "none" });
  });
});
$("#serviciosa").click(function () {
  $("#nos").fadeOut("slow", function () {
    $("#ini").fadeOut(50);
    $("#bodas").fadeOut(50);
    $("#quince").fadeOut(50);
    $("#servi").fadeIn();
    TweenMax.from("#servi", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#servi", 0.4, { scale: 1, ease: "none" });
  });
});
$("#bodasa").click(function () {
  $("#servi").fadeOut("slow", function () {
    $("#bodas").fadeIn();
    TweenMax.from("#bodas", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#bodas", 0.4, { scale: 1, ease: "none" });
  });
});
$("#quincea").click(function () {
  $("#servi").fadeOut("slow", function () {
    $("#quince").fadeIn();
    TweenMax.from("#quince", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#quince", 0.4, { scale: 1, ease: "none" });
  });
});

/* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
  }
});
var cardSpaces=15;
var middleDistance = 200;

	var nxtVal=middleDistance ;
	middleDistance-=cardSpaces;
	$(".next").each(function(){
		$(this).attr("elad-translate",nxtVal);
		$(this).css("transform","translateX(calc(-50% + "+nxtVal+"px)) rotateY(-70deg) skewY(9deg)");
		nxtVal+=cardSpaces;
	});

$("#navright").click(function(){
	if($(".active").next().hasClass("slideItems"))
	{
		$(".active").removeClass("active")
			.addClass("prev")
			.attr("elad-translate",middleDistance)
			.next()
			.addClass("active")
			.removeClass("next")
			.removeAttr("style")
			.attr("elad-translate","0");

		$(".next").each(function(){
			var thisTrans = parseInt($(this).attr("elad-translate"))-cardSpaces;
			$(this).css("transform","translateX(calc(-50% + "+thisTrans+"px)) rotateY(-70deg) skewY(9deg)");
			$(this).attr("elad-translate",thisTrans);
			// nxtVal+=cardSpaces;
		});

		$(".prev").each(function(){
			var thisTrans = parseInt($(this).attr("elad-translate"))+cardSpaces;
			$(this).css("transform","translateX(calc(-50% - "+thisTrans+"px)) rotateY(70deg) skewY(-9deg)");
			$(this).attr("elad-translate",thisTrans);
			// nxtVal+=cardSpaces;
		});
	}
});
$("#navleft").click(function(){
	if($(".active").prev().hasClass("slideItems"))
	{
		$(".active").removeClass("active")
			.addClass("next")
			.attr("elad-translate",middleDistance)
			.prev()
			.addClass("active")
			.removeClass("prev")
			.removeAttr("style")
			.attr("elad-translate","0");

		$(".next").each(function(){
			var thisTrans = parseInt($(this).attr("elad-translate"))+cardSpaces;
			$(this).css("transform","translateX(calc(-50% + "+thisTrans+"px)) rotateY(-70deg) skewY(9deg)");
			$(this).attr("elad-translate",thisTrans);
			// nxtVal+=cardSpaces;
		});

		$(".prev").each(function(){
			var thisTrans = parseInt($(this).attr("elad-translate"))-cardSpaces;
			$(this).css("transform","translateX(calc(-50% - "+thisTrans+"px)) rotateY(70deg) skewY(-9deg)");
			$(this).attr("elad-translate",thisTrans);
			// nxtVal+=cardSpaces;
		});
	}
});