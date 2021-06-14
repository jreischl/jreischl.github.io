// Custom JS

$(document).ready(function() {		 		  
$.getJSON('js/sponsors.json', function(data) {
$.each(data.sponsors, function(i, f) {
  var sponsor_item = '<div class="text-center p-3"><div class="badge mb-3 bg-'+ f.level +'">'+ f.level +' Sponsor</div><a href="'+ f.url +'" target="_blank"><img src="img/'+ f.logo +'" class="d-block img-fluid m-auto" alt="'+ f.name +'"></a></div>'
  $(sponsor_item).appendTo("#sponsors");		   		   		   
});		   
// Enable carousel 		  
        $('.carousel-sponsors').slick({
			dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });		  
      });		  		  

});