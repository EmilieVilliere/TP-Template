//button animation
function scrollNav() { //fonction d'animation du scroll
    jQuery(document).ready(function($) {
        $(".items-scroll-to").click(function(event) { // au click sur les items de nav
        
            let sectionNav = $(this).attr("href"); // on recupère la valeur de l'attribut href

            event.preventDefault(); // on lui fait perdre sa fonctionnalité de href

            let speed = 750; // Durée de l'animation (en ms)

            $('html, body').animate({ // on anime le html et body

                    scrollTop: $(sectionNav).offset().top // effectue un scroll vers la section actuelle correspondante
                }, 
                
                speed ); // Go

            return false; 
                
        });
    });
}


function animate() { // fonction d'animation

  $("#animation").on('change', function(){

    if($(this).is(':checked')) { // si le checkbox est checked 
        
      scrollNav(); // alors tu m'execute la fonction 

    } else {

      return false;

    }

  })

}

animate();


//section scroll section 

// $(document).ready(function() {

//     $(function(){

//       $(window).scroll(function(e) {

//         let position = window.scrollY; // recupère la position de l'axe Y du scroll

//         let section2 =  $('#section-2').offset(); // recupère les position Top de l'élement
//         let posTopSec2 = section2.top;

//         let section3 =  $('#section-3').offset();
//         let posTopSec3 = section3.top;

//         let section4 =  $('#section-4').offset();
//         let posTopSec4 = section4.top;

//         if(position > 0 && position < posTopSec2) { // si l'élement est compris entre 0 et position Top de la seconde section

//           $("#sec1").addClass("active");  // ajoute class active
//           $("#sec1").css({"background-color": "white", "color": "#a43f49"}); // ajout de style css
          
//         } 
        
//         if (position >= posTopSec2 && position < posTopSec3) { // si l'élement est compris entre position Top de la seconde section et celle de la section 3

//           $("#sec1").removeClass("active"); // on retire la class active de l'élement précédent 
//           $("#sec1").css({"background-color": "#a43f49", "color": "white"}); // ainsi que les styles css 
        
//           $("#sec2").addClass("active"); 
//           $("#sec2").css({"background-color": "white", "color": " #a43f49"});  // pour le mettre à l'élément actuel 

//         } 
        
//         if (position >= posTopSec3 && position < posTopSec4) { // ainsi de suite 

//           $("#sec2").removeClass("active");
//           $("#sec2").css({"background-color": "#a43f49", "color": "white"}); 

//           $("#sec3").addClass("active");  
//           $("#sec3").css({"background-color": "white", "color": " #a43f49"}); 

//         } 

//         if(position > posTopSec4) {

//           $("#sec3").removeClass("active");
//           $("#sec3").css({"background-color": "#a43f49", "color": "white"}); 

//           $("#sec4").addClass("active");  
//           $("#sec4").css({"background-color": "white", "color": " #a43f49"}); 

//         }

//       });
//   });
  
// });

// section scroll section CORRECTION  

function section() {
  $(".section").each(function() {

    let $this = $(this); // on recupère une liste d'éléments actuels sous forme d'objet 

    let topEdge = $this.offset().top - 80; // on recupère la position Top - le padding 80px
    let bottomEdge = topEdge + $this.height(); // on recupère la position Bottom en soustrayant la dimension du contenu - la valeur top
    let windowScroll = $(window).scrollTop(); // on initie une variable qui contient le mouvement du scroll de l'écran

    if(topEdge < windowScroll && bottomEdge > windowScroll) { // le scroll et compris entre la valeur la + grand et celle + petite 

      let section = $this.data("section"); // on récupère la section correspondante

      let filtre = "[href=#" + section + "]"; // on recupère le href correspondant
      let lien = $("a").filter(filtre); // on utilise la fonction filter pour faire correspondre l'id et le href
      lien.closest("li").addClass("active").siblings().removeClass("active"); // active contient le css
      // enfin si les deux match, on applique la class active et removeClass active à tous les autres.

    }

  });

}

section();


// section 3 layout
$(".isotope-wrapper").each(function() {
    // Pour chacun des éléments de isotope-wrapper...
    let $isotope = $(".isotope-box", this),
    filterCheckboxes = $("input[type='radio']", this);
    // On défini une fonction pour déterminer la catégorie des images qu'on affiche
    let filter = function() {
      // type contient soit la valeur du input radio sélectionné (celui qui a l'attribut checked)
      // soit "" (tout). Type contiendra la chaine de caractère qui servira pour la configuration
      // de Isotope.
      let type = filterCheckboxes.filter(":checked").data("type") || "*";
      // Parmi toutes les checkboxes, on ne garde que celle qui a l'attribut "checked" et on récupère
      // la valeur de son attribut data-type. On a donc soit "people", "nature", ou "animals"
      // Si la checkbox en question n'a pas d'attribut data-type, on récupère "", qui veut dire "tout"
      if(type !== "*") {
        // Si le type est différent de "", on construit la phrase qui sera utilisée pour la config
        // de Isotope. Sinon, on passera directement "" pour configurer le filtre
        type = "[data-type='" + type + "']";
        // Avec nature, on aura type = "[data-type='nature']".
      }
      // Maintenant qu'on a la chaine de caractère au format qu'il nous faut, on peut configurer Isotope
      // Les éléments .isotope-box affichés seront ceux qui ont un data-type correspondant au filtre
      $isotope.isotope({filter:type});
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    // A chaque changement (dès qu'on clique sur une autre catégorie), on lance la fonction
    // qui déterminera la catégorie et qui paramêtrera Isotope
    $(this).on("change", filter);
    // Cet appel à la fonction est déclenché dès le chargement de la page (pas quand on a un changement)
    filter();

  });


// button back to the top 

function backtop(){

  $(window).scroll(function(e) {

    let arrow = $('#arrow');
    let position = window.scrollY;

    let section3 =  $('#section-3').offset();
    let posTopSec3 = section3.top - 180; 

    if(position >= posTopSec3) {

      arrow.css('display','block');

    }

    if(position <= 10) {

      arrow.css('display','none');

    }

  });

}

backtop();

$("#arrow").on('click', function() {

  $("html, body").animate({scrollTop: 0}, 1000);

  return false;

})


// palet color change

function color() {

  let palet = $('#palet');
  let color = palet.val();

  let elements = [$('#menu'), $('.white-button a'), $('.line')];

  $(palet).on('change', function() {

    for(let item of elements) {

      item.css('background-color', color);
    }

  });

}

color();