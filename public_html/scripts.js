$("document").ready(function() {
    
    $(".list-group-item").css({"border-color": "darkslateblue", "background-color": "lightblue"});
    
    $("#container").css("border-style", "none");
    
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

