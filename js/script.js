$(document).ready(function(){
 
    $('.slider').slick(
        {
            slidesToShow: 1,
            responsive: 
            [
                {
                  breakpoint: 650,
                  settings: {
                      autoplay: true,
                      arrows: false
                  }
                },
                
            ]
        }
    );
 
})



