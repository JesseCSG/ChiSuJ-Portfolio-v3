//*----------------------------------------------------------------------------
//*-CSS-like functions that work via JQuiery
//*----------------------------------------------------------------------------
$("document").ready(function() {
    
    $(".nav").css({"border-color": "darkslateblue", "background-color": "lightblue"})
             .css("border-style", "double");
    
    
    
    $("#container").css("border-style", "none");
    
    $("#bodyOne").css({"background-image": "url(http://fc05.deviantart.net/fs8/i/2005/301/a/2/Futuristic_Wallpaper_by_oninross.jpg)", "color": "white"});
       
    $("#bodyTwo").css({"background-image": "url(http://i.giphy.com/7cTJ3gWVsoC08.gif)", "color": "white"})
            .css("background-size", "cover");
    
    $("#bodyThree").css({"background-image": "url(http://i.giphy.com/14hS1ZEmSfKdTW.gif)", "color": "white"})
            .css("background-size", "cover");
});
//*----------------------------------------------------------------------------
//*-Functions for HTML Page
//*----------------------------------------------------------------------------
function alertButtonClick() {
//    When clicked on, this box of text appears
    alert("You click, so want you want?");
}

function mouseOverMe() {
//    When moused over, the text changes
    $(".second").html("Get Out O'Here!!");}
function mouseOutMe() {
//    After mousing and leave, the text changes agian to this
    $(".second").html("You Leave!?! You Rude!!");}

function replaceWHtml() {
//    When button is clicked, text appears
    $(".h3Tag").html("<h6>A Random Sentence Appears!</h6>");}
function replaceWText() {
//    When button is clicked, the new text changees
    $(".h3Tag").text("A Random Sentence Now Changes!");}

function addAPara() {
//    When button is clicked, a random paragraph appears
    $("#randPara").append("<p>Paragragh text and stuff!!</p>");}
function removeAPara() {
//    When clicked, the new text is then erased
    $(".h3Tag").remove();}

function hideTheImage() {
//    When clicked, the image/gif is hidden 
    $('#image1').hide("fade", {}, 2500);}
function showTheImage() {
//    When clicked, the hidden image/gif then reappears
    $("#image1").show("fold", {}, 2500);}

