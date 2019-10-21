// ページロードアニメーション
$(".animsition").animsition({
	inClass               :   'zoom-in-lg', // ロード時のエフェクト
	outClass              :   'zoom-out-lg', // 離脱時のエフェクト
	inDuration            :    300, // ロード時の演出時間
	outDuration           :    300, // 離脱時の演出時間
	linkElement           :   '.animsition-link', // アニメーションを行う要素
	// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	loading               :    true, // ローディングの有効/無効
	loadingParentElement  :   'html', // ローディング要素のラッパー
	loadingClass          :   'animsition-loading', // ローディングのクラス
	unSupportCss          : [ 'animation-duration',
	                          '-webkit-animation-duration',
	                          '-o-animation-duration'
	                        ],
	overlay               :    false, // オーバーレイの有効/無効
	overlayClass          :   'animsition-overlay-slide', // オーバーレイのクラス
	overlayParentElement  :   'html' // オーバーレイ要素のラッパー
})
.one('animsition.inStart',function(){
	$('html').append('<div class="animsition-loading"></div>');
})
.one('animsition.inEnd',function(){
	$('.animsition-loading').remove();
})
.one('animsition.outStart',function(){
	$('html').append('<div class="animsition-loading"></div>');
});
//.one('animsition.outEnd',function(){
// 	$('.animsition-loading').remove();
//});
// サイドメニュー
var snapper = new Snap({
	element: document.getElementById('content')
});
// その他
$(function() {
	// サイドメニュー
	$('#toggle-left').click(function() {
		snapper.open('left');
	});
	$('#toggle-right').click(function() {
		snapper.open('right');
	});
	// テーマ切り替え
	$("#base").click(function () {
		$('#theme').attr('href', '');
		$("#base").addClass("active");
		$("#ios").removeClass("active");
		$("#android").removeClass("active");
	});
	$("#ios").click(function () {
		$('#theme').attr('href', '//cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet-theme-ios.min.css');
		$("#ios").addClass("active");
		$("#base").removeClass("active");
		$("#android").removeClass("active");
	});
	$("#android").click(function () {
		$('#theme').attr('href', '//cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet-theme-android.min.css');
		$("#android").addClass("active");
		$("#base").removeClass("active");
		$("#ios").removeClass("active");
	});
	// ページトップへ
	var showFlag = false;
    var topBtn = $('#gotop .icon');
	topBtn.css('bottom', '-100px');
    $('.content').scroll(function () {
        if ($(this).scrollTop() > 200) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '50px'}, 'slow'); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 'slow'); 
            }
        }
    });
	$('#gotop .icon').click(function() {
		$('.content').animate({scrollTop:0}, 'slow');
	});
	// Submitアニメーション
    $('form').submit(function(e) {
		$('body').addClass("zoom-out-lg");
		$('html').append('<div class="animsition-loading"></div>');
    });
});