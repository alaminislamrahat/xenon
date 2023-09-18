
$(document).ready(function() {
    /*magnafic popup js active */
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
         enabled:true,
        },
    });
    /*counter up js active */
    $('.counterup').counterUp();

    //slic slider active
    $('.testimonial').slick({
        arrows: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

  $(window).load(function(){
    //sticky menu
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 20){
            $('.header-area').addClass('sticky');
        }
        else{
            $('.header-area').removeClass('sticky');
        }
    })
  })