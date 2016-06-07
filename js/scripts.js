// animate letter //

var $V = $('#V');
//selector or DOM element, duration, CSS properties

TweenMax.from($V, 2, {
    
    opacity: 0,
    x: 333
  
    
});

var $C = $('#C');

//selector or DOM element, duration, CSS properties

TweenMax.from($C, 3, {
    
    opacity: 0,
    y: 333
    
 
    
});

var $D = $('#D');

//selector or DOM element, duration, CSS properties

TweenMax.from($D, 4, {
    
    opacity: 0,
    x: -111
    
    
    
 
    
});

//don't even know 
  
 var $vcd_contain = $('.vcd_contain');
TweenMax.from($vcd_contain, 3, {
    
    opacity: 1,
    x: 450,
    
});

//makes letters larger, smaller, changes opacity 

var V = document.getElementById("V");
var C = document.getElementById("C");
var D = document.getElementById("D");
TweenLite.to([V, C, D], 1, {scale:1, opacity:1});


