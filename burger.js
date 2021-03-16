
$(document).ready(function() {
    $('.burger,.list-two-about').click(function(event){
        $('.burger,.burger-menu').toggleClass('active-on');
        $('body').toggleClass('lock');
    });
});





// (function() {

//     var burger = document.querySelector('.burger');
//     var menu = document.querySelectorAll('.burger-menu');

//     this.burgerMenu.append(burger,menu);

    
//     burgerMenu.addEventListener('click', function() {
      
//         burgerMenu.toggleAttribute('active');
//     });
    
    
//     }
    
// )()