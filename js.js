let active_slide = 0
function forward() { 
    if(active_slide == 3) return;
    active_slide++; 
    updateSlides(); 
    checkBtn()
}
function checkBtn(){
    let elements = $(".elements .element");
    $('.left, .right').css('opacity', '1');
    if(active_slide == 0){ $('.left').css('opacity', '.5') }
    if(active_slide == elements.length-1){ $('.right').css('opacity', '.5') }
}
function back() { 
    if(active_slide == 0) return;
    active_slide--;
    updateSlides();
    checkBtn()
}
$(function(){
    updateSlides();
    checkBtn();
    $('.left').on('click', back);
    $('.right').on('click', forward);
});
function updateSlides(){
    let elements = Array(...$(".elements .element")).concat(...$(".elements .element"));
    // $(elements_cont).css('transform', 'translateX(calc(36em + 6px + ' + (-24.25*active_slide) +'em))');
    
    console.log(elements)
    // $('.elements .element').removeClass('active');
    // $($('.elements .element')[active_slide]).addClass('active');
}
$(document).mousemove(function(event){
    $('.mousefollow').css({
        top: event.pageY,
        left: event.pageX
    })
});
$('.clickable').on('mouseenter', function(){
    $('.mousefollow').css({
        width: '20px',
        height: '20px',
        border: '2px solid #000000ff',
    })
}).on('mouseleave', function(){
    $('.mousefollow').css({
        width: '30px',
        height: '30px',
        border: '2px solid rgba(0, 0, 0, 0.377)',
    })
})
