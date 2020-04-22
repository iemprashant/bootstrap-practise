$(document).ready(function(){
    $('#mycarousel').carousel({interval:1000});
    $('#carouselbutton').click(
        function(){
                if($('#carouselbutton').children('span').hasClass('fa-pause'))
                    {
                      $('#mycarousel').carousel('pause');
                      $('#carouselbutton').children('span').removeClass('fa-pause');
                      $('#carouselbutton').children('span').addClass('fa-play');
                    };
                    else( $('#carouselbutton').children('span').hasClass('fa-play'))
                    {
                      $('#mycarousel').carousel('cycle');
                      $('#carouselbutton').children('span').removeClass('fa-play');
                      $('#carouselbutton').children('span').addClass('fa-pause');
                    };
                }
    );

});