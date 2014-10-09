$('.simple-switch').each(function(){
    if ($(this).find('input').is(':checked')) {
        $(this).removeClass('off');
        $(this).find('input').attr('type', 'hidden').val(1);
    } else {
        $(this).addClass('off');
        $(this).find('input').attr('type', 'hidden').val(0);
    }
});
$('.simple-switch').on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass('off')) {
        $(this).removeClass('off');
        $(this).find('input').val(1);
    } else {
        $(this).addClass('off');
        $(this).find('input').val(0);
    }
});
