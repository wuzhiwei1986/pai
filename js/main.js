// JavaScript Document


jQuery(document).ready(function($) {

	// 动效 ///////////////////////////////////////
	add_dh(); /* 为元素添加动画 */
	setInterval(changebg, 400); /* 页面背景动画 */
	function changebg() {
		$('.body_css').toggleClass('changebg');
	}

	function add_dh() {
		//页面加载完成后运行动画
		$('.body_css').addClass('player');
		$('#pai').addClass('dh_bouncein_UP');
	}

	setTimeout(change_dh, 3000)

	function change_dh() {
		$('#pai').removeClass("dh_bouncein_UP");
		$('#pai').addClass("dh_xintiao");
	}

	// 动效 (end) ///////////////////////////////////////	 

	$('.input_tel').bind('input propertychange', function() {
		input_tel = $('.input_tel')
		if (input_tel.val() == "") {
			input_tel.removeClass('nobg');
		} else {
			input_tel.addClass('nobg');
		}

	});
	/**/
	$('.input_yz').bind('input propertychange', function() {
		input_yz = $('.input_yz')
		if (input_yz.val() == "") {
			input_yz.removeClass('nobg');
		} else {
			input_yz.addClass('nobg');
		}

	});

	//open 活动说明
	$('#shuoming').on('click', function(event) {
		$('#open_3').addClass('is-visible');
	});
	//open 已经领取过的提示
	$('#lq').on('click', function(event) {
		$('#open_1').addClass('is-visible');
	});
	//open 我也要派弹出层
	$('#pai').on('click', function(event) {
		$('#open_4').addClass('is-visible');
	});
	//open 跳转到我要派页面
	$('#paipai2,#paipai3').on('click', function(event) {
		location.href = "01.html";
	});

	//open 领取的表单	
	$('#shiyong,#shiyong2').on('click', function(event) {
		$('#open_2').addClass('is-visible');
	});


	//close popup　关闭层
	$('.cd-popup').on('click', function(event) {
		if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event) {
		if (event.which == '27') {
			$('.cd-popup').removeClass('is-visible');
		}
	});



});