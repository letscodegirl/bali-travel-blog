console.log(`First one to find this get bonus points. extra if you can tell the mentor's with out anyone else seeing it :D`)


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]



});

