$(function () {

  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu__close")
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu__close")
  });

  $(".header__button-menu").on("click", function () {
    $(".menu").toggleClass("open");
  })

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
  });

  if($(window).width() <= 740) {
    $(".works-path__item_measurements").appendTo($("#items-box"));
  }

  $(".contacts-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1770,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 10,
        
        }
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 10
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 10
        }
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 10
        }
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 10
        }
      },
      {
        breakpoint: 394,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 10
        }
      }
    ]
  });

  $(".article-slider__box").slick({
   prevArrow: '<button class="article-slider__arrow article-slider__arrow_left" type="button"><img src="images/arrow-prev.svg" width="10" height="17" alt="стрелка назад"</button>',
   nextArrow: '<button class="article-slider__arrow article-slider__arrow_right" type="button" class="slick-next"><img src="images/arrow-next.svg" width="10" height="17" alt="стрелка вперёд"</button>'
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

})