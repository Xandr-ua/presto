(function () {
    const burger = document.querySelector('.header__mobile-btn');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active'); 
    } )
}());

function toggleMenu() {
    const btn = document.getElementById('btn-menu');
    const menu = document.getElementById('list-menu');

    btn.classList.toggle('active');
    menu.classList.toggle('active');
}

// Slider

$(document).ready(function () {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $ ('.slider__conteiner');
    const track = $ ('.slider__track');
    const item = $ ('.wrap__item');
    const btnPrev = $ ('.btn-pre');
    const btnNext = $ ('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function() {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })
    btnNext.click(function() {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled', 
           position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };

    checkBtns();

});