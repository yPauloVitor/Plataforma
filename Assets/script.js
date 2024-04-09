$(document).ready(function() {
    // Adicione um evento de clique aos wrappers de ícones em todos os carrosséis
    $(".icon-wrapper").click(function() {
        // Encontre o ícone dentro do wrapper clicado
        var icon = $(this).find("i");
        
        // Verifique se o ícone é "Lido" ou "Lendo"
        if (icon.hasClass("bi-bookmark-check")) {
            // Adicione/Remova a classe CSS para mudar a cor do ícone "Lido"
            icon.toggleClass("icon-checked");
        } else if (icon.hasClass("bi-book")) {
            // Adicione/Remova a classe CSS para mudar a cor do ícone "Lendo"
            icon.toggleClass("icon-reading");
        }
    });
});


