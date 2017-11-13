$(document).ready(function() {
    $(window).on("scroll", function() {
        var topLogo = $('.navbar .logotype img');
        var fromTop = $("html").scrollTop();
        if (fromTop > 100){
            topLogo.addClass('navbarFixed').attr('src', 'img/logotype.png')
        }else{
            topLogo.removeClass('navbarFixed').attr('src', 'img/logo.png')
        }
    });

    $('.search-block .glyphicon').on('click', function () {
        if ($(this).hasClass('glyphicon-search')){
            $('.navbar-default').css({height: '78px', 'background-color': '#fff'});
            $('.search-block').css('width', '100%');
        }else{
            $('.navbar-default').css({height: 'auto', 'background-color': '#eef3fa'});
            $('.search-block').css('width', 'auto');
        }
        $('.navbar-header, .navbar-collapse .navbar-nav').toggle();
        $(this).siblings('input').toggle();
        $(this).toggleClass('glyphicon-search glyphicon-remove');
    });


    $('aside .show-all').on('click', function(e){
        e.preventDefault();
        var btn = $(this).siblings('.hidden-text');
        if (btn.is(':visible')){
            $(this).find('a').text('Все разделы').append('<span class="caret"></span>');
        }else{
            $(this).find('a').text('Скрыть')
        }

        btn.toggle('show')
    });


    $('aside > :last-child').wrap('<div class="targetHolder"></div>');
    var holder = $('.targetHolder');
    var target = holder.find('.sidebar-item');
    holder.css({height: target.height() + 'px', width: 'inherit'});

    var topNavbar = $('.navbar');
    var content = $('.content');

    $(window).on('resize', function(){
        target.unwrap();
        $('aside > :last-child').wrap('<div class="targetHolder"></div>');
        holder = $('.targetHolder');
        target = holder.find('.sidebar-item');
        holder.css({height: target.height() + 'px', width: 'inherit'});
    });

    $(window).on("scroll resize", function() {
        if ($(this).width() < 768){
            holder.css('height', 'auto');
            target.css({position: 'static', top: 'auto'});
            return false
        }

        var scroll = $(this).scrollTop();
        var fixedBreakpoint = $('aside').height() - holder.height() + parseInt(target.find('.sidebar-head').css('margin-top'));

        var absoluteBreakpoint = content.height() - holder.height() - parseInt(target.find('.sidebar-head').css('margin-top'));

        if (scroll > fixedBreakpoint && scroll < absoluteBreakpoint ){
            target.css({position: 'fixed', top: topNavbar.height() + 'px', width: 'inherit'})
        }else if (scroll > absoluteBreakpoint){
            target.css({position: 'absolute', top: absoluteBreakpoint - parseInt(target.find('.sidebar-head').css('margin-top'))*2})
        }else{
            target.css({position: 'static', top: 'auto'})
        }

    })
});