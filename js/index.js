$(function(){
    var cliH=$(window).height();
    var num=0;
    var flag=true;
   touch.on("body","swipeup","#fullpage",function(){
       if(!flag){
           return;
       }
        num++;
       if(num==$("section").length){
           num=$("section").length-1;
           return
       }
       flag=false;
       $("#fullpage").css({marginTop:-num*cliH});
   })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        flag=false;
        $("#fullpage").css({marginTop:-num*cliH});
    })
    document.getElementById("fullpage").addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
})
