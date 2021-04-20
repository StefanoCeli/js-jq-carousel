$(document).ready(function(){

    var imgActive= $('.box-img img.active');
    var btnPrev= $('.box i:first-child');
    var btnNext= $('.box i:last-child');
    var circleActive= $('nav i.active');

    btnNext.click(function(){
        if(imgActive.next().length===0){
            imgActive.removeClass('active');
            circleActive.removeClass('active');
            imgActive=$('.box-img img').first().addClass('active');
            circleActive=$('nav i').first('i').addClass('active');
        }else{
            imgActive.removeClass('active');
            circleActive.removeClass('active');
            imgActive=imgActive.next().addClass('active');
            circleActive=circleActive.next().addClass('active'); 
        }
    })

    btnPrev.click(function(){
        if(imgActive.prev().length===0){
            imgActive.removeClass('active');
            circleActive.removeClass('active');
            imgActive=$('.box-img img').last().addClass('active');
            circleActive=$('nav i').last('i').addClass('active');
        }else{
            imgActive.removeClass('active');
            circleActive.removeClass('active');
            imgActive=imgActive.prev().addClass('active');
            circleActive=circleActive.prev().addClass('active'); 
        }
    })

})