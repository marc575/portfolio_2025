$(document).ready(function () {
    $("#menuToggle").on("click", function () {
        // Ajout de l'animation sur l'icône
        $(this).find(".menu-icon").toggleClass("active");

        // Affichage/masquage du menu
        $("#navbarNav").toggleClass("show");
    });
});
