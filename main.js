$("#select-all-checkbox").change(function(){
    if(this.checked) {
        $('.item-checkbox').prop('checked', true);
        $('.delete-all').removeClass('no-item-selected');
    } else {
        $('.item-checkbox').prop('checked', false);
        $('.delete-all').addClass('no-item-selected');
    }
});


$(".item-checkbox").change(function(){
    if(this.checked) {
        $('.delete-all').removeClass('no-item-selected');
        if ($('.item-checkbox:checked').length == $('.item-checkbox').length) {
            $('#select-all-checkbox').prop('checked', true);
        }
    } else {
        $('#select-all-checkbox').prop('checked', false);
        if ($('.item-checkbox:checked').length == 0) {
            $('.delete-all').addClass('no-item-selected');
        }
    }
});

if ($('.item-checkbox:checked').length == 0) {
    $('.delete-all').addClass('no-item-selected');
}

$('.delete-icon').click(function() {
    $('.mask-click-cart').show();
    $('.delete-course-modal').show();
});

$('.dismiss-icon, .cancel-button, .confirm-button').on('click', function(){
    $('.mask-click-cart').hide();
    $('.delete-course-modal').hide();
});


