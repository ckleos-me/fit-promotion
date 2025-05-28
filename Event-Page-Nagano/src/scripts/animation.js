// scripts/animation.js
import $ from 'jquery';

export function smoothScroll() {
    $('.toEventReport').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const position = $(target).offset()?.top;
        $('html, body').animate({ scrollTop: position }, 500);
    });
}
