// main.js

     
        function changeVisual(num) {
        $('.tab-group a').removeClass('on');
        $('.slider > img').removeClass('on1');

        // 이미지 액션
        if(num == 1) {
            $('.slider > img').eq(num - 1).addClass('on1');
            $('.tab-group a').eq(num - 1).addClass('on');
        } else if(num == 2) {
            $('.slider > img').eq(num - 1).addClass('on1');
            $('.tab-group a').eq(num - 1).addClass('on');
        } else if(num == 3) {
            $('.slider > img').eq(num - 1).addClass('on1');
            $('.tab-group a').eq(num - 1).addClass('on');
        }
        };
    
    
// sub 
function changeColor(num) {
    $('#lnb li').removeClass('lnb-on');

    if(num == 0) {
        $('#lnb li').eq(0).addClass('lnb-on');
    } else if(num == 1) {
        $('#lnb li').eq(1).addClass('lnb-on');
    } else if(num == 2) {
        $('#lnb li').eq(2).addClass('lnb-on');
    }
}