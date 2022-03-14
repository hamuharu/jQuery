$(function(){
    // 
    var duration = 300;

    // images ----------------------------------------
    var $images = $('#images p');
    var $dadada = $('#images p').filter(':nth-child(1)')

    // images 1つ目の画像
    $dadada.mouseover(function() {
        $(this).find('strong, span').stop().animate({
            opacity: 1,
        });
    })
    $dadada.mouseout(function() {
        $(this).find('strong, span').stop().animate({
            opacity: 0,
        });
    });





    // images 2つ目の画像
    $images.filter(':nth-child(2)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({
                opacity: 1, left: '0%'
            }, duration);
            $(this).find('span').stop(true).animate({
                opacity: 1
            }, duration);
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({
                opacity: 0, left: '-200%'
            }, duration);
            $(this).find('span').stop(true).animate({
                opacity: 0
            }, duration);
        });

    // images 3つ目の画像
    $images.filter(':nth-child(3)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({
                bottom: '0px'
            }, duration * 1.5);
            $(this).find('span').stop(true).animate({
                opacity: 1
            }, duration);
            $(this).find('img').stop(true).animate({
                top: '-20px'
            }, duration * 1);
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({
                bottom: '-80px'
            }, duration * 1.5);
            $(this).find('span').stop(true).animate({
                opacity: 0
            }, duration);
            $(this).find('img').stop(true).animate({
                top: '0px'
            }, duration);
        });

});
