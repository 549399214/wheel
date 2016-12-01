
$(function(){






    var cliH=$(window).height();
    var num=0;
    var flag=true;
    $("#images")[0].onmousedown=function(e){
        e.preventDefault();
    }
    $("#images")[0].onmousemove=function(e){
        e.preventDefault();
    }
   touch.on("body","swipeup","#images",function(){
       if(!flag){
           return;
       }
        num++;
       if(num>=3){
           $(".jiant").css("display","none");
       }else{
           $(".jiant").css("display","block");
       }
       if(num>=$("section").length){
           num=$("section").length-1;
           return
       }
       flag=false;
       $(".btnBox li").css({
           background:"rgba(0,0,0,0)"
       }).eq(num).css({
           background:"#2F6289"
       })
       $("#images").css({marginTop:-num*cliH});
   })
    touch.on("body","swipedown","#images",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        if(num>=3){
            $(".jiant").css("display","none");
        }else{
            $(".jiant").css("display","block");
        }
        flag=false;
        $(".btnBox li").css({
            background:"rgba(0,0,0,0)"
        }).eq(num).css({
            background:"#2F6289"
        })
        $("#images").css({marginTop:-num*cliH});
    })
    document.getElementById("images").addEventListener("webkitTransitionEnd",function(){
        flag=true;

     for(var i= 0;i<4;i++){
         if(i==num-1){
             $(".descript").eq(num-1).css({
                 animation:"left 2s linear forwards"
             })
             $(".two-tu").eq(num-1).css({
                 animation:"right 2s linear forwards"
             })
         }else{
             $(".descript").eq(i).css({
                 animation:"left1 2s linear forwards"
             });
             $(".two-tu").eq(i).css({
                 animation:"right1 2s linear forwards"
             })

         }
     }


    })

  $(".jiant").click(function(){
      num++;
      if(num>=3){
          $(".jiant").css("display","none");
      }
      $("#images").css({
          marginTop:-num*cliH,
      })
      $(".btnBox li").css({
          background:"rgba(0,0,0,0)"
      }).eq(num).css({
          background:"#2F6289"
      })
      $("#images").css({marginTop:-num*cliH});
  })










    

















    var flag2=true;
    $(".menu-option").click(function(){
        if(flag2){
            $(".menu").css("display","block")
            $(".menu-option .menu-optionb").css({
                transform:"translate(0,-5px) rotate(-45deg)",
            })
            $(".menu-option .menu-optiont").css({
                transform:"translate(0,5px) rotate(45deg)",
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:"0",
                    transform:"rotateX(90deg)",
                    animation:"one 0.5s linear forwards "+0.2*index+"s"
                })
            })
            flag2=false;
        }else{
            $(".menu-option .menu-optionb").css({
                transform:"translate(0,0) rotate(0deg)",
            })
            $(".menu-option .menu-optiont").css({
                transform:"translate(0,0) rotate(0deg)",
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:"1",
                    transform:"rotateX(0deg)",
                    animation:"one1 0.5s linear forwards "+(1.2-0.2*index)+"s"
                })

            })
            setTimeout(function(){
                $(".menu").css("display","none")
            },1500)
            flag2=true;
        }
    })






   setInterval(function(){
       var cliW=$(window).width();
       $(".row").css({
           height:cliH,
       })
   },20)






        $(window).resize(function(){
            cliH=$(window).height();
            var cliW=$(window).width();
            $(".row").css({
                height:cliH,
            })
            $("#images").css({
                marginTop:-num*cliH,
            });
            if(cliW>1000){
                $(".menu-option .menu-optionb").css({
                    transform:"translate(0,0) rotate(0deg)",
                })
                $(".menu-option .menu-optiont").css({
                    transform:"translate(0,0) rotate(0deg)",
                })
                $(".menu a").each(function(index,obj){
                    $(obj).css({
                        opacity:0,
                        transform:"rotateX(90deg)",
                        animation:"none"
                    })
                })
                flag2=true;

            }
        })










    $("#images").mousewheel(function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $(".btnBox li").css({
            background:"rgba(0,0,0,0)"
        }).eq(num).css({
            background:"#2F6289"
        })
        $(this).css({marginTop:-num*cliH});
    },function(){
        if(!flag){
            return;
        }
        num++;
        if(num>=$("section").length){
            num=$("section").length-1;
            return;
        }
        $(".btnBox li").css({
            background:"rgba(0,0,0,0)"
        }).eq(num).css({
            background:"#2F6289"
        })
        $(this).css({marginTop:-num*cliH});
        flag=false;

    })












})