// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
// Back To Top
$(document).ready(function(){
  $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
// Modal Messenger
$(function() {
	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');
	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			$(formMessages).text(response);
			$('#submithire').val('');
			$('#submithire2').val('');
      $(document).ready(function(){
        if($('#alert-success')){
          setTimeout(function() {
            $('#myModal').modal('hide');
            }, 3000);
          }
        });
		})
		.fail(function(data) {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
});