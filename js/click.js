$(".dropdown-content").hide();
$(document).ready(function () {
    $(".dropdown").click(function (e) { 
        e.preventDefault();
       $(".dropdown-content").toggle();
        
    });
});