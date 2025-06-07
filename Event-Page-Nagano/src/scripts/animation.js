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

// scroll to top
$('.totop').click(function () {
    $('body,html').animate(
        {
            scrollTop: 0
        },
        500
    );
    return false;
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        //上から200pxスクロールしたら
        $('.totop').addClass('show'); //.totopについているUpMoveというクラス名を付与
    } else {
        $('.totop').removeClass('show'); //UpMoveというクラス名を除き
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});
