$(document).ready(function() {    

  // $('#tabs li a').addClass('inactive');
  
  $('.container-demo').hide();
  $('.container-demo:first').show();
  $('.container-demo-collections').hide();
      // Hello Page Js
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
// Collections Page Js
$('#tabs-collections li a').click(function(){
  var t1 = $(this).attr('id');

 
  $(this).siblings('.close-item-collection').show();
  $(this).parent().siblings().find('.close-item-collection').hide();
  $(this).parent().siblings().hide();
 
  
  $('.container-demo-collections').hide();
  $('#'+ t1 + 'CO').fadeIn('slow');

});
// Hello Page Js
  $('.close-item').click(function(){ 
    $(this).hide();
    $('.hello').hide();
    $('.hello-display').fadeIn('slow');
    $('.menu-hello').removeClass("mob-hellomenu");
    
  });
  // CollectionsPage Js
  $('.close-item-collection').click(function(){ 
    $(this).hide();
    
    $('.container-demo-collections').hide();
   

    $(this).parent().siblings().show();
 
   
    
  });
  // Shope Page Js
  $('.white-bg').on('click', function(){
    var src = $(this).children().attr('src');  
    $('#destination').children('img').attr('src', src);
    $('.product-display').addClass("show");
});
  $('.product-img').on('click', function(){
    var src = $(this).children().attr('src');  
    $('#destination').children('img').attr('src', src);
    $('.product-display').addClass("show");
});
// Product Page Js
$('.icons').click(function(){ 
  $('.details-popup').addClass("show");
  $('.product-site').addClass("popup");
  $('.image-class').addClass("popup");
});
$('.icon-details-mob').click(function(e){ 
  e.preventDefault(); 
  $('.details-popup-mob').addClass("show");
  $('.product-site').addClass("popup");
  $('.image-class').addClass("popup");
  $('.side-menu').addClass("popup");
  $('.side-navmenu').addClass("popup");
});
$('.close-popup-mob').click(function(e){ 
  e.preventDefault();
   $('.details-popup-mob').removeClass("show");
   $('.product-site').removeClass("popup");
   $('.image-class').removeClass("popup");
   $('.side-menu').removeClass("popup");
   $('.side-navmenu').removeClass("popup");
 });
 $('.arrow-right').click(function(e){ 
  e.preventDefault(); 
  $(this).hide();
  $('.arrow-left').show();
  $('.content.material').removeClass("hide");
  $('.content.detail').addClass("hide");
  $('.price-detail').addClass("hide");
  
});
 $('.arrow-left').click(function(e){ 
  e.preventDefault(); 
  $(this).hide();
  $('.arrow-right').show();
  $('.content.detail').removeClass("hide");
  $('.content.material').addClass("hide");
  $('.price-detail').removeClass("hide");
  
});
$('.close-popup').click(function(e){ 
 e.preventDefault(); 
  $('.details-popup').removeClass("show");
  $('.product-site').removeClass("popup");
  $('.image-class').removeClass("popup");
});
$('.select-size').click(function(e){ 
  e.preventDefault();
  $('.product-view-details').addClass("show");
  $('.product-site').addClass("popup");
  $('.image-class').addClass("popup");
  $('.side-menu').addClass("popup");
  $('.side-navmenu').addClass("popup");
});

$('.close-product-size').click(function(e){ 
  e.preventDefault();
   $('.product-view-details').removeClass("show");
   $('.product-site').removeClass("popup");
   $('.image-class').removeClass("popup");
   $('.side-menu').removeClass("popup");
   $('.side-navmenu').removeClass("popup");
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
// Product Page button over Js
$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
      if($(this).prop("checked") == true){
        $(".add-cart").html("add to cart");
        $(".add-cartmob").html("add to cart");
        $($(this).parent().parent().parent()).addClass("active")
        $($(this).parent().parent().parent().siblings()).removeClass("active")
        $($(this).parent().parent().parent().parent().siblings().children()).removeClass("active")
        $(".add-cart").mouseover(function() {
 
          $(".add-cart").html("add to cart");
      });
        $(".add-cartmob").mouseover(function() {
 
          $(".add-cartmob").html("add to cart");
      });
      }
      else if($(this).prop("checked") == false){
        $($(this).parent().parent().parent()).removeClass("active")
        $(".add-cart").mouseover(function() {
 
              $(".add-cart").html("please select size");
          });
        $(".add-cartmob").mouseover(function() {
 
              $(".add-cartmob").html("please select size");
          });
      }
  });
});
$(document).on('click', '.ck-button input[type="checkbox"]', function() {      
  $('.ck-button input[type="checkbox"]').not(this).prop('checked', false);      
});
$(".add-cart").mouseover(function() {
 
  $(".add-cart").html("please select size");
});
$(".add-cartmob").mouseover(function() {
 
  $(".add-cartmob").html("please select size");
});
$(window).scroll(function() {
  
  $(".products").scroll(function(){
   
  });
});