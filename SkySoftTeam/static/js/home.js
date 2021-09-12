//animOF Welcome
const logo = $('#logo path');
const certificate = $('#certificate path');
const handShake = $('#handShake path');
const webprogramming = $('#web-programming path');

var s = 1;
for(let i = 0; i<logo.length; i++){
s+=0.3;
$(logo[i]).attr('style' , 'animation:line-anim '+s+'s ease forwards;')
}


//DestroyTheWelcomeDiv
const WelcomeDiv = $('.welcome')[0]
setTimeout(function(){ $(WelcomeDiv).attr('style' , 'display:none') }, 6500);
//Fslider
var splide = new Splide('#aboutC', {
    type   : 'loop',
    arrows:false,
    autoplay :true,
    interval : 6000 ,
    focus:'center'
}).mount();

splide.on('moved', function () {
    $('.splide__slide').find('#title').removeClass('animate')
    $('.splide__slide').find('.more p').removeClass('animateFont')
    $('.splide__slide.is-active').find('#title').addClass('animate')
    $('.splide__slide.is-active').find('.more p').addClass('animateFont')
});

//Scslider
var splider = new Splide('#ProductsC', {
    type : 'loop',
	perPage: screen.width > 768 ? 4 : 1,
	perMove: 1,
    focus : 'center',
    autoplay : true,
    interval : 1000
}).mount();

splider.on('moved', function () {
    $('.splide__slide').find('.img').removeClass('active-product')
    $('.splide__slide.is-active').find('.img').addClass('active-product')
});


//WindowScroll
$(window).on('scroll' , function(){
 let x = 0
 switch(true){
    case window.scrollY > 2990 : {
        $('.logoCon').addClass('fade-in-opacity')
        break;
    }
    case window.scrollY > 250 :{
        var arr = [20,3,30]
        for(let i = 0; i<3; i++){
            var el = $('#CountUp'+(i+1))
            if(parseInt($(el).text()) == 0 ){
                $(el).jQuerySimpleCounter({
                    start : 0,
                    end : arr[i],
                    easing: 'swing',
                    duration : 1500
                })
            }else{
                $(el).text($(el).text())
            }
        }
        break;
      }
     case window.scrollY > 150 :{
       $('nav').css({'background-color' : 'white' , 'padding' : '5px'})
       $('nav').find('a').css({'color' : 'black'})
       $('nav').find('p').css({'color' : 'black'})
       $('nav').find('button i').css({'color' : 'black'})
       break;
     }
     case window.scrollY < 150 : {
      $('nav').css({'background-color' : 'transparent' , 'padding' : '0px'})
      $('nav').find('a').css({'color' : 'white'})
      $('nav').find('p').css({'color' : 'white'})
      $('nav').find('button i').css({'color' : 'white'})
      break;
     }
 }
    
})

//BTNS ACTIONS

$('#btnA').on('click' , function(){
    $('#HiddenNav').addClass("nav-in")
})


$(window).on('click' , function(e){
    if($(e.target).attr('id') != 'btnA' && $('#HiddenNav').hasClass("nav-in")){
        $('#HiddenNav').removeClass("nav-in")
    }
    if($(e.target).attr('id') == 'barsBTN'){
        $('#HiddenNav').addClass("nav-in")
    }
})

//SceneScrollMagic
var controller = new ScrollMagic.Controller();
var OurScene = new ScrollMagic.Scene({
    triggerElement : '#WelcomMessages'
}).setClassToggle('#WelcomMessages' , 'fade-in').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '.cerP'
}).setClassToggle('.cerP' , 'draw-line').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '.about'
}).setClassToggle('.about' , 'fade-in-opacity').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '.aboutCompanyTitle'
}).setClassToggle('.aboutCompanyTitle' , 'scale').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '#FirstRight'
}).setClassToggle('#FirstRight' , 'enter-in-right-img').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '#SecondRight'
}).setClassToggle('#SecondRight' , 'enter-in-right-img').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '#FirstLeft'
}).setClassToggle('#FirstLeft' , 'enter-in-left-img').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '#SecondLeft'
}).setClassToggle('#SecondLeft' , 'enter-in-left-img').addTo(controller)

var OurScene = new ScrollMagic.Scene({
    triggerElement : '#con'
}).setClassToggle('#con' , 'fade-in-opacity').addTo(controller)

