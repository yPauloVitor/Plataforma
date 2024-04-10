$(document).ready(function() {
    
    $(".icon-wrapper").click(function() {
    
        var icon = $(this).find("i");
        
        
        if (icon.hasClass("bi-bookmark-check")) {
            
            icon.toggleClass("icon-checked");
        } else if (icon.hasClass("bi-book")) {
            
            icon.toggleClass("icon-reading");
        }
    });
});


