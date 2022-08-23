$(document).ready(function() {
	$('#wrap').pagepiling();

  const bcolor = ['#e44d26', '#63a614', '#f89b28', '#feca41', '#0169ae', '#111b73', '#e5910e']
  $('.main_skill li').each(function(i){
    $(this).easyPieChart({
      trackColor : '#dedede', barColor : bcolor[i],
      size : 200, lineWidth : 30, lineCap : 'butt',
      animate : 1000
    });
  })
  // #e44d26, #29a7de, #63a614, #f89b28, #feca41, #0169ae,
  // #111b73, #e5910e

  $('#graphic2 ul').masonry({
    // columnWidth: 200,
    fitWidth : true,
    itemSelector: '#graphic2 li'
  });//masonry

  $('#coding ul').slick({
    slidesToShow : 3,
    slidesToScroll : 3,
    autoplay : true,
    autoplaySpeed : 1000
  });//slick

  lightbox.option({
    'alwaysShowNavOnTouchDevices' : true
  })//lightbox.option
});//ready
