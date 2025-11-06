$(document).ready(function() {
$('html').on('DOMMouseScroll mousewheel', function (e) {
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll down
    console.log('Down');
    $( "#header-nav" ).addClass( "hide-nav-bar" );
  } else {
    //scroll up
    console.log('Up');
    $( "#header-nav" ).removeClass( "hide-nav-bar" );
  }
  //prevent page fom scrolling
  //return false;
});

// On click show menu on small screen

  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});

var toggled = 0;

$('.menu-link').click(function(){
  if(toggled == 0){
  $('.bar3').stop().transition({rotate: "45", "margin-top": "30px"});
  $('.bar2').stop().transition({opacity: "0"}, "fast");
  $('.bar1').stop().transition({rotate: "-45", "margin-top": "30px"});
    toggled++;
    console.log("toggled down")
  }
  else{
    
  $('.bar3').stop().transition({rotate: "+=135", "margin-top": "20px"});
  $('.bar2').transition({opacity: "1"}, "fast");
  $('.bar1').stop().transition({rotate: "-=135", "margin-top": "40px"});
  toggled--;
   console.log("Togged Up")
  }
});
  });

ml = document.getElementById("ml");
robotics = document.getElementById("robotics");
web = document.getElementById("web");
slider = document.getElementById("slider");
b1 = document.getElementById("button1");
b2 = document.getElementById("button2");
b3 = document.getElementById("button3");

function projects(){
  ml.style.display="inline"
  robotics.style.display="none";
  web.style.display="none";
  b1.style.backgroundColor="rgb(23, 175, 186)";
  b2.style.backgroundColor="transparent";
  b3.style.backgroundColor="transparent";
  slider.style.translate="translateX(-50px)";
}
function change1(){
  ml.style.display="inline"
  robotics.style.display="none";
  web.style.display="none";
  b1.style.backgroundColor="rgb(23, 175, 186)";
  b2.style.backgroundColor="transparent";
  b3.style.backgroundColor="transparent";
}

function change2(){
  ml.style.display="none"
  robotics.style.display="inline";
  web.style.display="none";
  b2.style.backgroundColor="rgb(23, 175, 186)";
  b1.style.backgroundColor="transparent";
  b3.style.backgroundColor="transparent";
}

function change3(){
  ml.style.display="none"
  robotics.style.display="none";
  web.style.display="inline";
  b3.style.backgroundColor="rgb(23, 175, 186)";
  b2.style.backgroundColor="transparent";
  b1.style.backgroundColor="transparent";
}