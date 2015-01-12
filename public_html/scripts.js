$("document").ready(function() {
    $(".body").css({"background-image": "url(http://abu0mushlih.files.wordpress.com/2013/12/space-arts-and-astronomical-technology-exploration_238385.jpg)", "size": "700px"});
    
    $(".div1").css("background-color", "red");
    
    $("#TEXT ~ p").css("color", "white");
    
    $("p:last").css({"border-style": "solid", "color": "white"});
    
    $("div:nth-child(3)").css("color", "white");
    
    $(".div2").css("color", "white");
    
    $(".div3").css("color", "white");
    
    $(".clickToHide").click(function() {
        $(".clickToHide").hide();
    });
    
    $("#TEXT2").bind("click", alertButtonClick);
    
    $("#TEXT2").css({"border-style": "solid", "border-color": "red"});
    
    $(".second").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    
    $("#replaceWHtml").bind("click", replaceWHtml);
    
    $("#replaceWText").bind("click", replaceWText);
    
    $("#addAPara").bind("click", addAPara);
    
    $("#removeAPara").bind("click", removeAPara);
    
    
    
});

function alertButtonClick() {
    alert("You click, so want you want?");
}

function mouseOverMe() {
    $(".second").html("Get Out O'Here!!");
}

function mouseOutMe() {
    $(".second").html("You Leave!?! You Rude!!");
}

function replaceWHtml() {
    $(".h3Tag").html("<h6>A Random Sentence Appears!</h6>");
}

function replaceWText() {
    $(".h3Tag").text("A Random Sentence Now Changes!");
}

function addAPara() {
    $("#randPara").append("<p>Paragragh text and stuff!!</p>");
}

function removeAPara() {
    $("#randPara").remove();
}

