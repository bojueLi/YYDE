$(function(){
    $('#myTab li').click(function(){
        var index = $(this).index();
        index == 1 ? $('.serviceSupport-join').css('display','block') : $('.serviceSupport-join').css('display','none')
    });
});