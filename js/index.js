/*
* @Author: ecitlm
* @Date:   2017-07-28 17:11:11
* @Last Modified by:   ecitlm
* @Last Modified time: 2017-08-05 16:31:09
*/

'use strict';
// topbanner关闭按钮
$(function(){
	$('.icon-x-copy').click(function(){
		$('.top-banner').hide();
	});
});

//轮播图banner-lfet的二级菜单
$(function(){
	$('#banner-l-menu>li').mouseover(function(){
		// alert($(this).index);
		// console.log($(this).index());
		$('.banner-l-detail').show();
		$('.banner-l-detail>div').eq($(this).index()).show().siblings('div').hide();

	});
	$('#banner-l-menu>li').mouseout(function(){
		// alert($(this).index);
		// console.log($(this).index());
		$('.banner-l-detail').hide();
		$('.banner-l-detail>div').eq($(this).index()).show().siblings('div').hide();
	});
	$('.banner-l-detail').mouseover(function(){
		$(this).show();
	});
	$('.banner-l-detail').mouseout(function(){
		$(this).hide();
	});
});

// banner轮播图部分
$(function(){
				//手动控制轮播图
				$('.j-sider-list li').eq(0).show();
				$('.j-slider-indicator li').mouseover(function(){
					$(this).addClass('on').siblings().removeClass('on');
					var index=$(this).index();
					i=index;
					$('.j-sider-list li').eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200);
				})
				//自动播放
				var i=0;
				var t=setInterval(move,2000);
				//自动播放核心函数
				function move(){
					i++;
					if(i==8){
						i=0;
					}
					$('.j-slider-indicator li').eq(i).addClass('on').siblings().removeClass('on');
					$('.j-sider-list li').eq(i).fadeIn(200).siblings().fadeOut(200);
				}

				//向右播放核心函数
				function moveL(){
					i--;
					if(i==-1){
						i=8;
					}
					$('.j-slider-indicator li').eq(i).addClass('on').siblings().removeClass('on');
					$('.j-sider-list li').eq(i).fadeIn(200).siblings().fadeOut(200);
				}
				$('.j-slider-arrL').click(function(){
						moveL();
				})
				$('.j-slider-arrR').click(function(){
					move();
				})
				//鼠标移入移除
				$('.j-slider-mian').hover(function(){
					clearInterval(t);
					$('.j-slider-arr').show();
				},function(){
					t=setInterval(move,2000);
					$('.j-slider-arr').hide();
				})
			})

//banner右侧新闻列表
$(function(){
	$('.news-header-a1').mouseover(function(event) {
		/* Act on the event */
		$('.news-content-item1').show();
		$('.news-content-item2').hide();
		$('.news-tabs').animate({'left' : '-2px'}, 200);
	});
	$('.news-header-a2').mouseover(function(event) {
		/* Act on the event */
		$('.news-content-item2').show();
		$('.news-content-item1').hide();
		$('.news-tabs').animate({'left' : '50px'}, 200);
	});
})
// bannner右侧服务列表

//京东秒杀倒计时
$(function(){
	var starttime = new Date("2017/8/30 22:22:22");
  setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    day=day<10?"0"+day:day;
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    seconds=seconds<10?"0"+seconds:seconds;
    $('.ms-time-itemH').html(hour);
    $('.ms-time-itemM').html(minute);
    $('.ms-time-itemS').html(seconds);
	},1000);
});
//京东秒杀左

// //a.第一层div，设置overflow为hidden
// b.里面是一个ul，每个li里面有个img或者为每个li设置背景图片也可以。
// c.li设置为左浮动，排成一行，还有ul的宽度设置成li宽度的总和，不然li会换行哦！
// d.点击向右按钮，可以让整个ul向左滑动，设置ul的margin-left为负的li宽度，然后和把第一个li放到最后一个，设置ul的margin-left为0px
// 这样就形成了无缝连接了；注意的是，设置的部分必须放到ul向左滑动动画的回调函数里面。
// e.点击向左按钮，想把ul的margin-left设置成负的li宽度，然后把最后一个li放到第一个，然后设置ul的margin-left为0px，此时大功告成
$(function(){
	var timer = setInterval(next, 1500);
	function next () {
			 $(".ms-left-list").animate({marginLeft:"-200px"}, 300, function () {
                    $(".ms-left-list>li").eq(0).appendTo($(".ms-left-list"));
                    $(".ms-left-list").css('marginLeft','0px');
			});
		};

	function pre (){
			 $(".ms-left-list").css('marginLeft','-200px');
                $(".ms-left-list>li").eq(19).prependTo($(".ms-left-list"));
                $(".ms-left-list").animate({marginLeft:"0px"},300);
		}
	$('.ms-contorl-next').click(function () {
                next();
		});
	$('.ms-contorl-pre').click(function () {
              	pre();
            });
	$('.ms-bd-left').mouseover(function(event) {
		/* Act on the event */
		clearInterval(timer);
		$('.ms-left-control').show();
	});
	$('.ms-bd-left').mouseout(function(event) {
		/* Act on the event */
		timer = setInterval(next, 1500);
		$('.ms-left-control').hide();
	});

	});
// 京东秒杀右侧
$(function(){
	var i = 0;
	var timer = setInterval(opc, 1500);
	function opc (){
		i++;
		if(i>1){
			i=0;
		}
		$('.bd-rightt-list li').eq(i).css('opacity','0').siblings().css('opacity','1');
		$('.bd-rightt-indexlist li').eq(i).addClass('on1').siblings().removeClass('on1');
	}

	$('.bd-rightt-list').mouseover(function(event) {
		/* Act on the event */
		clearInterval(timer);
		$('.bd-rightt-indexitem').mouseover(function(){
			var index = $(this).index();
			$('.bd-rightt-list li').eq(index).css('opacity','0').siblings().css('opacity','1');
			$('.bd-rightt-indexlist li').eq(index).addClass('on1').siblings().removeClass('on1');
		})
	});
	$('.bd-rightt-list').mouseout(function(event) {
		/* Act on the event */
	    timer = setInterval(opc, 1500);
	});
});
 // 会买专辑
$(function(){
	var i = 0;
	var timer = setInterval(opc, 1500);
	function opc (){
		i++;
	 	if(i>2){
	 		i=0;
	 	}
		$('.fs-page>div').fadeOut(200).eq(i).fadeIn(200);
		$('.s-sup-ind li').eq(i).addClass('on2').siblings().removeClass('on2');
	}

	$('.fst-bd2').mouseover(function(event) {
		/* Act on the event */
		clearInterval(timer);
		$('.s-sup-btn').show();
	});
	$('.fst-bd2').mouseout(function(event) {
		/* Act on the event */
	    timer = setInterval(opc, 1500);
	    $('.s-sup-btn').hide();
	});
	$('.sup-btn-pre').click(function(){
			i--;
			if(i<-1){
				i=2;
			}
			$('.fs-page>div').fadeOut(200).eq(i).fadeIn(200);
			$('.s-sup-ind li').eq(i).addClass('on2').siblings().removeClass('on2');
		})
	$('.sup-btn-next').click(function(){
			opc();
		})
});

//京东排行榜
$(function(){
	$('.fst-top-header>a').mouseover(function(){
		var index= $(this).index();
		$('.fst-top-content>div').eq(index).show().siblings().hide();
		$('.fst-header-active').css('transform', 'translateX()');
	});
})

// 爱生活下方
$(function(){
	// var timer = setInterval(next,1000);
	function next () {
			 $(".lb-list").animate({marginLeft:"-95px"}, 300, function () {
                 $(".lb-list>li").eq(0).appendTo($(".lb-list"));
                 $(".lb-list").css('marginLeft','0px');
			});
		};

	function pre (){
			 $(".lb-list").css('marginLeft','-95px');
                $(".lb-list>li").eq(9).prependTo($(".lb-list"));
                $(".lb-list").animate({marginLeft:"0px"},300);
		}
	$('.cloth-lb-pre').click(function(){
				pre();
		})
	$('.cloth-lb-next').click(function(){
				next();
		})

	$('.cloth-extra-lb').hover(function(){
			$('.cloth-lb-wrapper').show();
			// clearInterval(timer);
	},function(){
			$('.cloth-lb-wrapper').hide();
			// timer = setInterval(next,1000);
	})
})
// 搜索输入框
$(function(){
	var arr = ['家电一折起','华为运动蓝牙耳机','小米6','魅族pro7','内衣大促销'];
	var i = 0;
	var timer = setInterval(inputV, 5000);
	function inputV (){
		i++;
		i=i>4?0:i;
		$('#key').val(arr[i]);
	}

})

// 固定搜索栏
$(function(){
	var navOffset=$(".ms").offset().top;
	console.log(navOffset);
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >=navOffset){
                    $(".header-searchM").addClass("fixed");
                    $(".header-search").css('top', '6px');
                    $(".text").css('background-color', '#efefef');
                    $(".header-log2").css('display', 'block');
                }else{
                    $(".header-searchM").removeClass("fixed");
                    $(".header-search").css('top', '25px');
                    $(".header-log2").css('display', 'none');
                }
            });
})
// 返回顶部
$(function(){
	$(".tab-text").click(function(event) {
		/* Act on the event */
		$('body,html').animate({scrollTop:0},1000);
                return false;
	});
})
