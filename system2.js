$(document).ready(function(){
    var speed = 500;
  
    $(".slide").first().addClass('active')
  
    $(".slide").hide()
  
    $(".active").show()
  
    $("#next").on('click', nextSlide)
    $("#back").on('click', backSlide)
  
    function nextSlide(){ 
      $('.active').removeClass('active').addClass('oldActive')
      if($('.oldActive').is(':last-child')){
        $('.slide').first().addClass('active')
      }else{
        $('.oldActive').next().addClass('active')
      }
      $('.oldActive').removeClass('oldActive')
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    }
    function backSlide(){
      $('.active').removeClass('active').addClass('oldActive')
      if($('.oldActive').is(':first-child')){
        $('.slide').last().addClass('active')
      }else{
        $('.oldActive').prev().addClass('active')
      }
      $('.oldActive').removeClass('oldActive')
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    }
  });
