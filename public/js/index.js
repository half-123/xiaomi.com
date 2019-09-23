$(function () {
    $('.downloadApp').on('mouseover',function () {
        $('.app').stop().slideDown();
    }).on('mouseleave',function () {
        $('.app').stop().slideUp();
    })


    $('.cart').on('mouseover',function () {
        $('.cart-content').stop().slideDown();
    }).on('mouseleave',function () {
        $('.cart-content').stop().slideUp();
    })


    //lunbo
    var index = 0;
    var f = function () {
        $(".lunbotu:eq("+index+")").stop().hide();
        $(".nav-site").removeClass("nav-site-active");
        index--;
        if(index == -1)
            index = 4;
        $(".lunbotu:eq("+index+")").stop().show();
        $(".nav-site:eq("+index+")").addClass("nav-site-active");
    }
    var lunbo = setInterval(f,5000)

    $('.next').on('click',function () {
        clearInterval(lunbo);
        $('.lunbotu').stop().hide();
        $(".nav-site").removeClass("nav-site-active");
        index++;
        if(index == 5)
            index = 0;
        $(".lunbotu:eq("+index+")").stop().show();
        $(".nav-site:eq("+index+")").addClass("nav-site-active");
        lunbo = setInterval(f,5000);
    })
    $('.prev').on('click',function () {
        clearInterval(lunbo);
        $('.lunbotu').stop().hide();
        $(".nav-site").removeClass("nav-site-active");
        index--;
        if(index == -1)
            index = 4;
        $(".lunbotu:eq("+index+")").stop().show();
        $(".nav-site:eq("+index+")").addClass("nav-site-active");
        console.log(index);
        lunbo = setInterval(f,5000);
    })
    
    $('.chlid-list').on('mouseover',function () {
        var i = $('.chlid-list').index(this);
        $('.goods:visible').hide();
        $('.goods:eq('+i+')').show();
    })
    $('.main').on('mouseleave',function () {
        $('.goods').hide();
    })

    $('.nav-a').on('mouseover',function () {
        var i = $('.nav-a').index(this);
        console.log(i);
        $('.nav-goods-list:visible').hide();
        $('.nav-goods-list:eq('+i+')').show();
    })
    $('.header-nav').on('mouseleave',function () {
        $('.nav-goods-list').stop().slideUp();
    })
    $('.r-bar:eq(0)').on('mouseover',function () {
        $('.r-app').show();
    }).on('mouseleave',function () {
        $('.r-app').hide();
    })

    $(window).scroll(function(){
        if($(document).scrollTop() < 800){
            $(".top").hide();
        }else{
            $(".top").show();
        }
    });

    $('.top').on('click',function () {
        $('body,html').animate({scrollTop:0},500)
    })
});