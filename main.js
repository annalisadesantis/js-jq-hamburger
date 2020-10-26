// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile e al click sull'icona "X" il menu mobile deve scomparire.
// In altre parole, dovere scrivere solo il codice js necessario a far funzionare l'hamburger menu.

// Hamburger-menu appare al click
$(".fa-bars").click(function(){
    $(".hamburger-menu").slideToggle("slow");
});

// Hamburger-menu scompare al click
$(".close").click(function(){
    $(".hamburger-menu").hide();
});
