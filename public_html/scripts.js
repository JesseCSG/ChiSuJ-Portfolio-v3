//*----------------------------------------------------------------------------
//*-CSS-like functions that work via JQuery
//*----------------------------------------------------------------------------
$("document").ready(function() {
    
    $("#randStuff ~ p").css("border-style", "solid");
    
    //*Allows for replacement and change of H3 tag.
    $("#replaceWHtml").bind("click", replaceWHtml);
    $("#replaceWText").bind("click", replaceWText);

    
    //* Alterations of the navigation bar.
    $(".nav").css({"border-color": "darkslateblue", "background-color": "black"})
             .css({"border-style": "double", "color": "white"});
             
    ///*Alterations of Accordion/ making of Accordion.
    $(".accordion").accordion({ header: "h4" })
                    .css({"background-color": "blue", "color": "white"});
            
    //*Creates workable Tab-Bar.
    $("#tabs").tabs();
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();
            
    //*Allows mouse overs and mouse abilities.
    $(".second").bind("mouseover", mouseOverMe)
                .bind("mouseout", mouseOutMe);
                    
    //*Alterations to link.
    $(".linkApp").css({"color": "white", "border-bottom": "solid"});
    
    //*Alterations on container.
    $("#container").css("border-style", "none");
    
    //*Allows gif background and covers gif on screen.
    $("#bodyOne").css({"background-image": "url(http://i.giphy.com/yByo4tOPLJKla.gif)", "color": "white"})
                 .css("background-size", "cover");       
    $("#bodyTwo").css({"background-image": "url(http://i.giphy.com/7cTJ3gWVsoC08.gif)", "color": "white"})
                 .css("background-size", "cover");    
    $("#bodyThree").css({"background-image": "url(http://i.giphy.com/Vi2T8mzZwP61y.gif)", "color": "white"})
                   .css("background-size", "cover");
           
    //*Alterations to show/close Navigation Bar.
    $("#showNav").bind("click", showTheNav)
            .css({"background-color": "blue", "color": "white"});
    $("#closeNav").bind("click", closeTheNav)
            .css({"background-color": "blue", "color": "white"});
    
    $(".linkGif").css({"size": "200px", "border": "2px solid blue"});    
    
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
    $(".second").html("It's our little secret, we mon't make a fuss!");}
function mouseOutMe() {
//    After mousing and leave, the text changes agian to this
    $(".second").html("We found Gold!! We found Gold!!");}

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

function closeTheNav() {
//    When clicked, the image/gif is hidden 
    $('.list-group').hide("fade", {}, 2500);}
function showTheNav() {
//    When clicked, the hidden image/gif then reappears
    $(".list-group").show("fold", {}, 2500);}

