/**
 * Created by bom on 2016/6/13.
 */

$(".footBox ul li:nth-child(1)").mouseover(function(){
    $(".footBox ul li:nth-child(1) img").attr("src","../imges/images/home_left_hover.png")
})
$(".footBox ul li:nth-child(1)").mouseout(function(){
    $(".footBox ul li:nth-child(1) img").attr("src","../imges/images/home_left.png")
})
$(".footBox ul li:nth-child(2)").mouseover(function(){
    $(".footBox ul li:nth-child(2) img").attr("src","../imges/images/home_hover.png")
})
$(".footBox ul li:nth-child(2)").mouseout(function(){
    $(".footBox ul li:nth-child(2) img").attr("src","../imges/images/home.png")
})
$(".footBox ul li:nth-child(3)").mouseover(function(){
    $(".footBox ul li:nth-child(3) img").attr("src","../imges/images/home_right_hover.png")
})
$(".footBox ul li:nth-child(3)").mouseout(function(){
    $(".footBox ul li:nth-child(3) img").attr("src","../imges/images/home_right.png")
})
$(".topBox>.more_info_close").mouseover(function(){
    $(this).css('cursor','pointer')
})
$(".t_more").click(function(){
    $(".more_info").addClass('on');
})
$(".more_info>.more_info_close").bind(
    {click:function(){
    $(".more_info").removeClass("on");
},
     mouseover:function(){
         $(this).css('cursor','pointer')
     }
    }

)

