// --- Navbar text change---//
var texts = [
    "Free shipping on orders $75 and over",
    "Enjoy free returns in store within 7 days of purchase",
    "Back to fall 40% OFF* the entire store",
    "Get $USD10 off by subscribing to our newsletter"
];
var counter = 0;
var element = document.getElementById("changeText");

function changeText() {
    element.innerHTML = texts[counter];
    counter++;
    if (counter >= texts.length) {
        counter = 0;
    }
} setInterval(changeText, 5000);// this executes every 5 seconds


// --- hamburger---//
$(function () {
    $(".toggle").on("click", function () {
        if ($(".itemNav").hasClass("active")) {
            $(".itemNav").removeClass("active");
            $(this).find("a").html("<i class='fa fa-bars'></i>");
        } else {
            $(".itemNav").addClass("active");
            $(this).find("a").html("<i class='fa fa-times'></i>");
        }
    });
});

// --- Back to top---//
//Get the button
var backToTop = document.getElementById("backTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// --- show larger image---//
function largerImage(e) {
    var originalPic = e.target.src;
    document.getElementById("large").src = originalPic.replace("_small", "");
}

function initialize() {
    var imgs = document.querySelectorAll(".slides img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = largerImage;
    }
}
window.onload = initialize;

//--- add to fav---//
var fav = document.getElementsByClassName('fav');

for(var i = 0; i<fav.length; i++){
    fav[i].addEventListener('click',function(){
        if(this.title == 'add to my fav'){
            this.setAttribute('src','img/heart_red.png');
            this.title = 'remove';
        }else{
            this.setAttribute('src','img/heart_white.png');
            this.title = 'add to my fav';
        }
    })
}

//---slideshow---//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//---blogs carousel---//
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
    },
})
