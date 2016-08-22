// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

var ran = Math.floor((Math.random() * 10) + 1);
if (ran < 5){
    document.getElementById("menu-content").innerHTML='<a href="index_grid.html" class="list-group-item" >Grid <img src="img/grid.png" class="img_view" alt="Grid"></a> <a href="index_list.html" class="list-group-item" >List <img src="img/list.png" class="img_view" alt="List"> </a>'; 
}else{
 document.getElementById("menu-content").innerHTML='<a href="index_list.html" class="list-group-item" >List <img src="img/list.png" class="img_view" alt="List"> </a> <a href="index_grid.html" class="list-group-item" >Grid <img src="img/grid.png" class="img_view" alt="Grid"></a> '; 

}