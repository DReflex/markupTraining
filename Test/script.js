$(document).ready(function(){
  //check for mobile and set width to auto
  var windowH = $(window).height();
  var windowW = $(window).width();
  console.log(windowW);
  if(windowW < 760){
    return true
  }
  else{
    $("#landing").height( windowH)
  }

  console.log($(window).scrollTop());
  $( window ).scroll(function() {
    if($(window).scrollTop() > 0){
      $("#nav").css({'padding': '0px 65px', "background" : "#FFF"});
    }
    else{
      $("#nav").css({'padding': '15px 65px', "background" : "#F3F3F3"});

    }
  });
  //list of all elements containing animations then diff for each animation
  function animations (){
    var $fade_in_elements = $('.fade-in-animation');
    var $translate_left_elements = $('.animation-translate-left')
    var $translate_right_elements = $('.animation-translate-right')
    var $fade_down_elements = $('.animation-down')


    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($fade_in_elements, function(){
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('landing-animation');
      } else {
        $element.removeClass('landing-animation');
      }
    })
    $.each($translate_left_elements, function(){
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animation-left');
      } else {
        $element.removeClass('animation-left');
      }
    })
    $.each($translate_right_elements, function(){
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animation-right');
      } else {
        $element.removeClass('animation-right');
      }
    })
    $.each($fade_down_elements, function(){
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animation-fade-down');
      } else {
        $element.removeClass('animation-fade-down');
      }
    })


  }

  //
  $(window).on('scroll resize', animations);
  $(window).trigger('scroll');
});
