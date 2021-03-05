/* Descrizione:
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Bonus:
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS
Consiglio del giorno:
Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.*/

$(document).ready(function() { 
    $(".next").click(function() {
        nextPic();
    });
    $(".prev").click(function() {
        previousPic();
    });
});


function nextPic() {
    var activePic = $(".images .active");
    var activeInd = $(".nav .active");

    activePic.removeClass("active");
    activeInd.removeClass("active");
    
    if (activePic.hasClass("last")) {
        $(".images .first").addClass("active");
        $(".nav .first").addClass("active");
    } else {
        activePic.next("img").addClass("active");
        activeInd.next("i").addClass("active");
    }
}

function previousPic() {
    var activePic = $(".images .active");
    var activeInd = $(".nav .active");
    
    activePic.removeClass("active");
    activeInd.removeClass("active");

    if (activePic.hasClass("first")) {
        $(".last").addClass("active");
        $(".last").addClass("active");
    } else {
        activePic.prev("img").addClass("active");
        activeInd.prev("i").addClass("active");
    }
}


/* BONUS, ho provato a fare tutto semplicemente con una sola funzione 
ma non ci riuscivo perché il click non posso metterlo su fa-circle
altrimenti non c'è distinzione tra un pallino e l'altro */

$(function() { 
    $(".ind1").click(function() {
        currentPic1();
    });
    $(".ind2").click(function() {
        currentPic2();
    });
    $(".ind3").click(function() {
        currentPic3();
    });
    $(".ind4").click(function() {
        currentPic4();
    });
});

function currentPic1() {
    var activePic = $(".images .active");
    var activeInd = $(".nav .active");  
    activePic.removeClass("active");
    activeInd.removeClass("active");

    $("img.pic1").addClass("active");
    $("i.ind1").addClass("active");
}

function currentPic2() {
    var activePic = $(".images .active");
    var activeInd = $(".nav .active");
    activePic.removeClass("active");
    activeInd.removeClass("active");

    $("img.pic2").addClass("active");
    $("i.ind2").addClass("active");
}

function currentPic3() {
    var activePic = $(".images .active");
    var activeInd = $(".nav .active");
    activePic.removeClass("active");
    activeInd.removeClass("active");

    $("img.pic3").addClass("active");
    $("i.ind3").addClass("active");
}

function currentPic4() {
    var activePic = $(".images .active");
    var activeInd = $(".nav .active");
    activePic.removeClass("active");
    activeInd.removeClass("active");

    $("img.pic4").addClass("active");
    $("i.ind4").addClass("active");
}


// BONUS 2

function autoPlay() {
    play = $(".fas.fa-play-circle");
    play.removeClass(".fa-play-circle");
    play.addClass("fa-stop");
    var mouseHoverFlag = false;
    setInterval(function () {
        if (!mouseHoverFlag) {
            nextPic();
        }
    }, 2000);
    $(".nav").fadeOut(1500);
    $(".prev").fadeOut(1500);
    $(".next").fadeOut(1500);
}

function refresh() {
    location.reload();
}


$(document).ready(function() { 
    $(".playstop").mouseenter(autoPlay);
});

$(document).ready(function() { 
    $(".playstop").mouseleave(refresh);
});












