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
    document.getElementById("btnVision").innerText = "Nuit";
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
        container[i].style.backgroundColor="slategrey";
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
    document.getElementById("btnVision").innerText = "Jour";
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
    document.getElementById("btnlanguage").innerText = "FR";
}
function setFrench()
{
    $(".ENcontent").hide();
    $(".FRcontent").show();

    document.getElementById("btnlanguage").value = "FR";
    document.getElementById("btnlanguage").innerText = "EN";
}