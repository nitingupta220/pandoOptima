$('.OpenImgUpload').click(function () {
    'use strict';
    console.log(12345);
    $('#imgupload').trigger('click');
});

jQuery(function ($) {
    $('input[type="file"]').change(function () {
        console.log(123);
        if ($(this).val()) {
            var filename = $(this).val();
            console.log(filename);
            $(this).closest('.list .col-md-12 .col-md-3').find('p .upload-path').text(filename);
        }
    });
});
$('#checkall').on('click', function () {
    $(':checkbox').each(function () {
        this.checked = true;
    });
});
