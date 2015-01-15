$("document").ready(function() {
    
    $("video#bgvid").css({"background": "url(polina.jpg) no-repeat", "background-size": "cover"});
    
    $(".div1").css("border-style", "double");    
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

    $("#hideLogo").bind("click", hideTheImage);
    $("#showLogo").bind("click", showTheImage);

    $(".div6").accordion({header: "h4"});
    
});

function alertButtonClick() {
    alert("You click, so want you want?");
}

function mouseOverMe() {
    $(".second").html("Get Out O'Here!!");}
function mouseOutMe() {
    $(".second").html("You Leave!?! You Rude!!");}

function replaceWHtml() {
    $(".h3Tag").html("<h6>A Random Sentence Appears!</h6>");}
function replaceWText() {
    $(".h3Tag").text("A Random Sentence Now Changes!");}

function addAPara() {
    $("#randPara").append("<p>Paragragh text and stuff!!</p>");}
function removeAPara() {
    $(".h3Tag").remove();}

function hideTheImage() {
    $('#image1').hide("fade", {}, 2500);}
function showTheImage() {
    $("#image1").show("fold", {}, 2500);}

