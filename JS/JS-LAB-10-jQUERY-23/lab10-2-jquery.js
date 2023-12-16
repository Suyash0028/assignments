//LAB 10 - 2 INVENTORY PAGE

jQuery(window).on("load",function (){
    $('.desc').hide();


    $('tr').hover(function (){
        $(this).css({'background':'red', 'color':'white'});
    },function (){
        $(this).css({'background':'white', 'color':'black'});
    });
    
    $('tr').on('click',function(){
        $('.desc').hide();
       $(this).find('.desc').show();
    });
});