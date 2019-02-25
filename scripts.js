function setDay ()
{
    //Couleur de fond
    document.body.style.backgroundColor="whitesmoke";

    //Couleur de la police générale
    document.getElementById("allcontent").style.color="black";

    //Couleur des conteneurs
    var container = document.getElementsByClassName("containerlevel1");
    for(var i=0 ; i < container.length ; i++)
    {
        container[i].style.backgroundColor="white";
    }

    //Couleur des ombres de conteneurs
    var shadow = document.getElementsByClassName("containerlevel1");
    for(var i=0 ; i < shadow.length ; i++)
    {
        shadow[i].style.boxShadow="0.2em 0.2em #CCC";
    }
    document.getElementById("btnVision").value = "Jour";
    document.getElementById("imgVision").src = "bootstrap-3.3.7-dist/fonts/glyphicons/glyphicons-231-moon.png";
}

function setNight()
{
    //Couleur de fond
    document.body.style.backgroundColor="#404040";

    //Couleur de la police générale
    document.getElementById("allcontent").style.color="white";

    //Couleur des conteneurs
    var container = document.getElementsByClassName("containerlevel1");
    for(var i=0 ; i < container.length ; i++)
    {
        container[i].style.backgroundColor="#8f99a0";
    }

    //Couleur des ombres de conteneurs
    var shadow = document.getElementsByClassName("containerlevel1");
    for(var i=0 ; i < shadow.length ; i++)
    {
        shadow[i].style.boxShadow="0.2em 0.2em #808080";
    }

    //Laisser en noir une partie du texte
    var glyph = document.getElementsByClassName("glyphicon");
    for(var i=0 ; i < shadow.length ; i++)
    {
        // glyph[i].style.color="black";
    }
    document.getElementById("btnVision").value = "Nuit";
    document.getElementById("imgVision").src = "bootstrap-3.3.7-dist/fonts/glyphicons/glyphicons-232-sun.png";
}

function changeVision()
{
    // var flag = document.getElementById("btnVision").innerText;
    var flag = document.getElementById("btnVision").value;
    if(flag == "Jour")
    {
        setNight();
    }
    else
    {
        setDay();
    }
}

function changeLanguage()
{
    var flag = document.getElementById("btnlanguage").value;
    if(flag == "FR")
    {
        setEnglish();
    }
    else
    {
        setFrench();
    }
}

function setEnglish()
{
    $(".FRcontent").hide();
    $(".ENcontent").show();

    document.getElementById("btnlanguage").value = "EN";
    document.getElementById("imgLanguage").src = "images/FR.png"
}
function setFrench()
{
    $(".ENcontent").hide();
    $(".FRcontent").show();

    document.getElementById("btnlanguage").value = "FR";
    document.getElementById("imgLanguage").src = "images/EN.png"
}

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});