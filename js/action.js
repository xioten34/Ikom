/*jslint browser: true*/
/*global $, jQuery, alert*/

// scroll effect

$(document).ready(function () {
    $('ol.navigation a').on('click', function () {
        var page = $(this).attr('href'); // Page cible
        var speed = 1500; // Durée de l'animation (en ms)
        //var pagecurrent = $(this).attr('href').replace('#', '');

        $('ol.navigation a').removeClass('isActive'); //suppr couleur du lien (menu)
        $(this).addClass('isActive'); //on ajoute une couleur le lien sélectionné


        //$('.contenu').fadeOut(1500); // disparition de la section
        //$('.' + pagecurrent + ' .contenu').fadeIn(1500); // apparition de l'img

        $('html, body').stop().animate({
            scrollTop: $(page).offset().top
        }, speed, function () {
            location.hash = page;
            //$('.' + pagecurrent).css('left','0');
        });

        return false;
    });
});


// effet fade au lancement de la page
$(document).ready(function(){
    $('html').fadeIn(1000); 
});


// Changement de langue (fade effect)
$(document).ready(function () {
    $('ul.langage a').on('click', function () {

        var page = $(this).attr('href');
        //  var current = $(this).attr('id');

        // $('ul.langage a').removeClass('isActive'); //suppr couleur du lien (menu)
        // $(this).addClass('isActive'); //on ajoute une couleur le lien sélectionné

        $('body').fadeOut('1000', function () {
            window.location = page;
            $('body').css('display', 'none');
            $('body').fadeIn(2000);
            location.hash = page;
        });

        return false;

    });
});
