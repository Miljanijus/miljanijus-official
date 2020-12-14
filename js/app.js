var lightboxClose = document.querySelector('.lightbox-close');
var lightbox = document.querySelector('.lightbox');
var lightboxOpen = document.querySelector('.box2-cover');
const gallery = document.querySelector('.portfolio-gallery');
const galleryItem = gallery.querySelectorAll('.box2');
const galleryImage = lightbox.querySelector('img');
var link = document.querySelector('lightbox img');
var scrollUp = document.querySelector('.btnScroll');

lightbox.addEventListener('click', function(){
    if(event.target != galleryImage){
        lightbox.classList.remove('show');
        lightbox.classList.add('hide');
    }
})

lightboxClose.addEventListener("click", function(){
    lightbox.classList.remove('show');
    lightbox.classList.add('hide');
});

galleryItem.forEach(function(items){
    items.querySelector('.fas').addEventListener("click",function(){
        lightbox.classList.remove('hide');
        lightbox.classList.add('show');
        galleryImage.src = items.querySelector('img').getAttribute('src');
    });
});

scrollUp.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:"smooth"});
})

window.onscroll = function(){
    const scroolTop = document.documentElement.scrollTop;

    if(scroolTop>100){
        document.querySelector('header').classList.add('black');
    }
    else{
        document.querySelector('header').classList.remove('black');
    }
    
    if(scroolTop>600){
        scrollUp.style.left = "92%";      
    }else{
        scrollUp.style.left = "-90%";
    }
    
}

const navigation = document.querySelector('.nav');
i = navigation.querySelectorAll('a');

i.forEach(function(navi){
    navi.addEventListener('click', function(){
        for(let k=0; k<i.length; k++){
            i[k].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector('.nav').classList.toggle('show');
})});


const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('show');
})
