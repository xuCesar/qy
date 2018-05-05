$(function(){

    var dlNum  =$("#selectList").find("dl");
    for (var i = 0; i < dlNum.length; i++) {
        $(".hasBeenSelected .clearList").append("<div class=\"selectedkey selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
    }
    
    var refresh = "true";
    
    $(".listIndex span:not(.more) ").on("click",function(){
        var text =$(this).text();
        var selectedShow = $(".selectedShow");
        var textTypeIndex =$(this).parents("dl").index();
        var textType =$(this).parent("dd").siblings("dt").text();
        var index = textTypeIndex -(2);
        $(".clearDd").show();
        $(".selectedShow").eq(index).show();
        $(this).addClass("selected").siblings().removeClass("selected");
        selectedShow.eq(index).find("span").text(textType);
        selectedShow.eq(index).find("label").text(text);
        var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
        if (show > 1) {
            $(".clear_key").show();
        }
       
    });
    $(".selectedShow em").on("click",function(){
        $(this).parents(".selectedShow").hide();
        var textTypeIndex =$(this).parents(".selectedShow").index();
        var index = textTypeIndex;
        $(".listIndex").eq(index).find("a").removeClass("selected");
        
        if($(".listIndex .selected").length < 2){
            $(".clear_key").hide();
        }
    });
    
    $(".clear_key").on("click",function(){
        $(".selectedShow").hide();
        $(this).hide();
        $(".listIndex a ").removeClass("selected");
    }); 

    $(".more").click(function(event){
        event.preventDefault();
        var tspan = $(this).find("span");
            if($(this).hasClass("open")){
                $(this).parents('.list_indus').css("height","30px");
                $(this).html("更多");
                $(this).removeClass("open")
            }else{
                $(this).parents('.list_indus').css("height","auto");
                $(this).html("收起");
                $(this).addClass("open")
            }
    });


})