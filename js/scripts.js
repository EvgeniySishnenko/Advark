$(function(){
    $('.selfie-slider').slick({
        slidesToShow: 1,
        prevArrow: '<button class="selfie-slider__arrow selfie-slider__arrow_left"></button>',
        nextArrow: '<button class="selfie-slider__arrow selfie-slider__arrow_right"></button>',
    });
    $('.selfie-slider-case').slick({
        slidesToShow: 1,
        prevArrow: '<button class="selfie-slider-case__arrow selfie-slider-case__arrow_left"></button>',
        nextArrow: '<button class="selfie-slider-case__arrow selfie-slider-case__arrow_right"></button>',
    });

    $('.js-selfie-uncollapse').on('click', function(event) {
        event.preventDefault();
        var btn = $(this);
        var item = btn.closest('.selfie-cases__item');
        var block = item.find('.selfie-cases__item-in');
        block.toggleClass('selfie-cases__item-in_collapsed');
        btn.toggleClass('active');
    });
});