$(document).ready(function() {
    $('#nav-icon2').sidr({
        renaming: false
    });
    $('#sidr li').each(function(index) {
        var item = $(this);
        if (item.find('ul').length > 0) {
            // Has submenus
            item.find('a').first().append('<span class="sub-toggle">+</span>');
        }
    });

    $('#sidr .sub-toggle').click(function(e) {
        e.preventDefault();
        var item = $(this),
            txt;
        item.toggleClass('is-open');
        txt = item.hasClass('is-open') ? '–' : '+';
        item.text(txt);
        $(this).closest('li').find('a').first().next().slideToggle();
    });
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
    });
});