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
        if(this.scrollY > 50){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            
        }
        
    })
})





// ONLOAD DONT SHOW HAMBURGER //

function onload () {
    var hamburgerMenu = document.querySelector (".navbar .menu");
    
    hamburgerMenu.style.top= '-100%';
}
onload ();




/* SMOOTH SCROLLING WITH JS FOR ABOUT SECTION */ 

$(".menu-btn").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 900);
  });


 







  window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}


function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const name = document.querySelector(".subject");
const email = document.querySelector (".email");
const message = document.querySelector (".message");
const form = document.querySelector ('.send_button');


