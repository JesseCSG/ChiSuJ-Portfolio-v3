$("document").ready(function() {
    
    $(".body").css({"background-image": "url(http://abu0mushlih.files.wordpress.com/2013/12/space-arts-and-astronomical-technology-exploration_238385.jpg)", "size": "700px"});
   
    $(".div1").css("background-color", "red");
    
    $("#TEXT ~ p").css( "color", "white");
    
    $("p:last").css({"background-color": "green", "color": "purple"});
    
    $("div:nth-child(3)").css("color", "white");
    
    $(".div2").css("color", "white");
    
    $(".clickToHide").click(function() {
        $(".clickToHide").hide();
    });
    
    $("#TEXT2").bind("click", alertButtonClick);
    
    $("#logo").bind()
    
});

    function alertButtonClick() {
        alert("You click, so want you want?");
    }


