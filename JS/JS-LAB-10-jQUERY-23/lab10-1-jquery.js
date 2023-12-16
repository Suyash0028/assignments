//LAB 10 - 1 FAQ PAGE

jQuery(window).on("load",function (){
    $('p').css('display','none');

    $('h2').on("click",function (){
        $('.contentBox').slideUp();
        $(this).next('p').toggle(3000);
    });

    $('p').hover(function(){
        //When Hoverd
        $('p').addClass('textHovered');
    },function (){
        //When unhovered
        $('p').removeClass('textHovered');
    });


    // $('h2').hover(function (){
    //     $(this).css({'background':'red', 'color':'white'});
    // },function (){
    //     $(this).css({'background':'#D99E50', 'color':'#FFE5C3'});
    // });
    
});