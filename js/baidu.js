$(function(){
    var heights=$(window).height();
    var flage=true;
    var num=0;
    $("body").mousedown(function(e){
        e.preventDefault();
    })
    $("body").mousemove(function(e){
        e.preventDefault();
    })
    touch.on("body","swipeup",".fullpage",function(){
console.log(flage)
        if(!flage){
            return;
        }
        num++;
        console.log(num)
        if(num==$(".fullpage>div").length){
            num=$(".fullpage>div").length-1;
        }
        flage=false;
        $(".fullpage").css({"marginTop":-num*heights});
        $(".lunbo div").removeClass("active").eq(num).addClass("active");

    })
    touch.on("body","swipedown",".fullpage",function(){
        if(!flage){
            return;
        }
        num--;
        if(num==-1){
            num=0;
        }
        flage=false;
        $(".fullpage").css({"marginTop":-num*heights});
        $(".lunbo div").removeClass("active").eq(num).addClass("active");

    })
    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flage=true;
    })

    // 选项卡

    $(".lunbo div").click(function(){
        num=$(this).index();
        $(".lunbo div").removeClass("active").eq(num).addClass("active");
        $(".fullpage").css({"marginTop":-num*heights})
    })

    $(".xia").click(function(){
        num=$(this).index()+1;
        
        $(".lunbo div").removeClass("active").eq(num).addClass("active");
        $(".fullpage").css({"marginTop":-num*heights})
    })
    
    // 滚轮事件

    // 菜单
    var flage2=true;
    $(".muen").click(function () {
        if(flage2){
            $(".muen .muen-top").css({"transform":"translate(0,6px) rotate(45deg)"})
            $(".muen .muen-bott").css("transform","translate(0,-6px) rotate(-45deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    opacity:"0",
                    transform:"rotateX(90deg)",
                    animation:" muen 1.5s  linear forwards "+index*0.2+"s",
                })
            })
            flage2=false;
        }else{
            $(".muen .muen-top").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen .muen-bott").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    opacity:"1",
                    transform:"rotateX(0deg)",
                    animation:" muen1 1.5s  linear forwards "+(1.2-index*0.2)+"s",
                })
            })
            flage2=true;
        }

    })
})