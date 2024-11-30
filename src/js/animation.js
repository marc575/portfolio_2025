$(document).ready(function () {
    // Fonction de comptage
    function animateCount($element, duration) {
        let targetValue = parseInt($element.attr("data-value")); // Valeur cible
        $({ count: 0 }).animate(
            { count: targetValue },
            {
                duration: duration, // Durée de l'animation
                easing: "swing", // Effet d'animation
                step: function (now) {
                    $element.text(Math.ceil(now)); // Mise à jour du texte
                },
                complete: function () {
                    // Ajoute un effet avec Animate.css une fois terminé
                    $element.addClass("animate__animated animate__bounce");
                }
            }
        );
    }

    // Parcourir chaque élément avec la classe .big-text
    $(".big-text").each(function () {
        let $this = $(this);
        $this.addClass("animate__animated animate__fadeIn"); // Animation d'entrée
        setTimeout(() => animateCount($this, 2000), 500); // Lancer le comptage
    });
});
