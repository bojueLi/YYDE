$(function(){
    // 点击回到头部
    $(".scroll").hide();
    $('.scroll_top').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    });

    //手机不显示侧边栏
    var w = $(window).width();
    if( w <= 680 ){
        $(".scroll").hide();
    } else {
        $(window).scroll(function(){
            //大于1000px
            if($(window).scrollTop() >= 1000){
                $(".scroll").fadeIn(1000); // 开始淡入
            } else{
                $(".scroll").fadeOut(1000); // 淡出
            }
        });
    }

    // 左侧导航栏
    $(".leftNav").hide();
    $(window).scroll(function() {
        var sHeight = $(window).scrollTop();
        // console.log(sHeight)
		var vHeight=$(window).height()/2;
		var ptop=sHeight+vHeight;
        if(sHeight>400){
            $(".leftNav").show();   
            // $(".leftNav").stop();
            // $(".leftNav").animate({ 
            //     top:ptop,
            // },"slow");
        } else{
            $(".leftNav").hide();
        }
    });
    
    
    // function getUrlParam(name) {
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    //     var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
    //     if (r != null) return unescape(r[2]); return null; // 返回参数值
    // }
    // var Index = getUrlParam('index');
    var Index = window.location.search.split("index=")[1];
    // console.log(Index)
    if(Index!=undefined){
        $("#myTab li").eq(Index).addClass("active").siblings().removeClass("active");
        $("#myTabContent>div").eq(Index).addClass("active in").siblings().removeClass("active in");
    }

    // 导航栏跳转
    // $('#productCenter ul li').click(function(){
    //     // debugger;
    //     var index = $(this).index();
    //     $("#myTab li").eq(index).addClass("active").siblings().removeClass("active");
    //     $("#myTabContent>div").eq(index).addClass("active in").siblings().removeClass("active in");
    // })
    // $('#navNewsInformation ul li').click(function(){
    //     var index = $(this).index();
    //     $("#myTab li").eq(index).addClass("active").siblings().removeClass("active");
    //     $("#myTabContent>div").eq(index).addClass("active in").siblings().removeClass("active in");
    // })
    // $('#navServiceSupport ul li').click(function(){
    //     var index = $(this).index();
    //     $("#myTab li").eq(index).addClass("active").siblings().removeClass("active");
    //     $("#myTabContent>div").eq(index).addClass("active in").siblings().removeClass("active in");
    // })
    // $('#navAboutUs ul li').click(function(){
    //     var index = $(this).index();
    //     $("#myTab li").eq(index).addClass("active").siblings().removeClass("active");
    //     $("#myTabContent>div").eq(index).addClass("active in").siblings().removeClass("active in");
    // })
});