$(document).ready(function() {    

  // $('#tabs li a').addClass('inactive');
  $('.container-demo').hide();
  $('.container-demo:first').show();
      
  $('#tabs li a').click(function(){
      var t = $(this).attr('id');
    // if($(this).hasClass('inactive')){  
    // }
      $('.hello').fadeIn('slow');
      $('.hello').addClass("mob-hello");
      $('.menu-hello').addClass("mob-hellomenu");
      $('.hello-display').hide();
      $(this).siblings('.close-item').show();
      $(this).parent().siblings().find('.close-item').hide();
      // $('#tabs li a').addClass('inactive');           
      // $(this).removeClass('inactive');
      
      $('.container-demo').hide();
      $('#'+ t + 'C').fadeIn('slow');
   
  });
  $('#tab1').click(function(){ 
    $('.hello').removeClass("mob-hello");
    $('.menu-hello').removeClass("mob-hellomenu");
});
  $('.close-item').click(function(){ 
    $(this).hide();
    $('.hello').hide();
    $('.hello-display').fadeIn('slow');
    $('.menu-hello').removeClass("mob-hellomenu");
  });
  $('.white-bg img').on('click', function(){
    var src = $(this).attr('src');  
    $('#destination').children('img').attr('src', src);
    $('.product-display').addClass("show");
});
  $('.product-img img').on('click', function(){
    var src = $(this).attr('src');  
    $('#destination').children('img').attr('src', src);
    $('.product-display').addClass("show");
});
  
  });

  // Loader
var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;
// Loadbar Animation
$(".loaded").animate({
  height: width + "%"
}, time);
// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.preloader-wrap').fadeOut(300);
}, time);
  