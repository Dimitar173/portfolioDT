const mainMenu = document.querySelector ('.menu')
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector ('.openMenu');




//EVENT  LISTENERS FOR HAMBURGER MENU//

openMenu.addEventListener ('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    
    
}

function close() {
    mainMenu.style.top ='-100%';
    
}
// close hamburger menu after click a
$( '.menu li a' ).on("click", function(){
    $('.fa-times').click();
  });

// NAVIGATION SCROLL COLOR CHANGE//

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            
        }
        
    })
})




/* SMOOTH SCROLLING WITH JS FOR ABOUT SECTION */ 

$(".menu-btn").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
  });


 