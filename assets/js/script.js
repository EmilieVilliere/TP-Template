// $(document).ready(function () {
               

//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar, #content').toggleClass('active');
//         $('.collapse.in').toggleClass('in');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });
// });


// $(".isotope-wrapper").each(function() {
//     // Pour chacun des éléments de isotope-wrapper...
//     let $isotope = $(".isotope-box", this),
//     filterCheckboxes = $("input[type='radio']", this);
//     // On défini une fonction pour déterminer la catégorie des images qu'on affiche
//     let filter = function() {
//       // type contient soit la valeur du input radio sélectionné (celui qui a l'attribut checked)
//       // soit "" (tout). Type contiendra la chaine de caractère qui servira pour la configuration
//       // de Isotope.
//       let type = filterCheckboxes.filter(":checked").data("type") || "";
//       // Parmi toutes les checkboxes, on ne garde que celle qui a l'attribut "checked" et on récupère
//       // la valeur de son attribut data-type. On a donc soit "people", "nature", ou "animals"
//       // Si la checkbox en question n'a pas d'attribut data-type, on récupère "", qui veut dire "tout"
//       if(type !== "") {
//         // Si le type est différent de "", on construit la phrase qui sera utilisée pour la config
//         // de Isotope. Sinon, on passera directement "" pour configurer le filtre
//         type = "[data-type='" + type + "']";
//         // Avec nature, on aura type = "[data-type='nature']".
//       }
//       // Maintenant qu'on a la chaine de caractère au format qu'il nous faut, on peut configurer Isotope
//       // Les éléments .isotope-box affichés seront ceux qui ont un data-type correspondant au filtre
//       $isotope.isotope({filter:type});
//     };

//     $isotope.isotope({
//       itemSelector: ".isotope-item",
//       layoutMode: "masonry"
//     });

//     // A chaque changement (dès qu'on clique sur une autre catégorie), on lance la fonction
//     // qui déterminera la catégorie et qui paramêtrera Isotope
//     $(this).on("change", filter);
//     // Cet appel à la fonction est déclenché dès le chargement de la page (pas quand on a un changement)
//     filter();

//   });