$(document).mousemove(function (event) {
    $('.mousefollow').css({
        top: event.pageY,
        left: event.pageX
    })
});
$('.clickable').on('mouseenter', function () {
    $('.mousefollow').css({
        width: '20px',
        height: '20px',
        border: '2px solid #000000ff',
    })
}).on('mouseleave', function () {
    $('.mousefollow').css({
        width: '30px',
        height: '30px',
        border: '2px solid rgba(0, 0, 0, 0.377)',
    })
})
//---------------------------------------
let active_slide = 4
function forward() {
    active_slide = 5
    $('.elements .element').removeClass('active');
    $($('.elements .element')[active_slide]).addClass('active');
    let elements = $('.elements .element');
    first = $(elements)[0];
    $(elements).remove(first);
    $('.elements').append(first); 
}
function back() {
    active_slide = 3
    $('.elements .element').removeClass('active');
    $($('.elements .element')[active_slide]).addClass('active');
    let elements = $('.elements .element');
    last = $(elements)[$(elements).length-1];
    console.log(last)
    $(elements).remove(last);
    $('.elements').prepend(last);
}
function resetSlides(){
    let elements = Array(...$(".elements .element")).concat(...$(".elements .element").clone());
    $('.elements').empty();
    $('.elements').append(elements).clone(true);
}
$(function () {
    resetSlides()
    updateSlides();
    $('.left').on('click', back);
    $('.right').on('click', forward);
});
function updateSlides() {
    let elements = $('.elements .element');
    $(elements).css('transform', 'translateX(calc(84.5em + 6px + ' + (-24.25*active_slide) +'em))');
    $('.elements .element').removeClass('active');
    $($('.elements .element')[active_slide]).addClass('active');
}