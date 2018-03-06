$(document).ready(function() {
    $('textarea.page_script').each(function(i){
        $.globalEval($(this).text());
    });
    $('textarea.page_style').each(function(i){
        $("<style>")
            .prop("type", "text/css")
            .html($(this).text())
            .appendTo("head");
    });        
});
