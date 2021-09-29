// $(function() {
//   $('html,body').animate({ scrollTop: 0 }, '1');
// });

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
ドロワーメニュー
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/

function toggleNav() {
  let body = document.body;
  let hamburger = document.getElementById("js-hamburger");
  let blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });

  blackBg.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
}

toggleNav();

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
トップへ戻るボタンをフェード
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
$(window).scroll(function () {
  let now = $(window).scrollTop();
  if (now > 400) {
    $("#pagetop").fadeIn("slow");
  } else {
    $("#pagetop").fadeOut("slow");
  }
});

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
スクロール時フェードイン
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();

    $(".scrollanime").each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 150) {
        $(this).addClass("fadeInUp");
      }
    });
  });
});

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
スムーススクロール
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
$(function () {
  $("a[href^='#']").click(function () {
    let adjust = 0;
    let speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});