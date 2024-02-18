$('#thumbnail-slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    itemWidth: 50,
    direction: "vertical",
    asNavFor: '#slider',
    itemMargin: 0
   });
  
   $('#slider').flexslider({
     animation: "slide",
     controlNav: false,
     slideshow: false,
     animationLoop: true,
     sync: "#thumbnail-slider"
   });