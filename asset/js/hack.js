$(function(){
	$(document).tooltip({selector: '[data-toggle="tooltip"]'});
	
	$('#media-wrapper a.thumbnail').click(function(){
		var checkBoxes = $(this).find('input[type="checkbox"]');
		var icon = $(this).find('.pick');
		
		checkBoxes.attr('checked', !checkBoxes.attr("checked"));
		var thisAttr = checkBoxes.attr("checked");
		if(thisAttr == undefined){
			checkBoxes.prop('checked', false);
			icon.addClass('glyphicon-ok-circle');
			icon.removeClass('glyphicon-remove-circle');
		}else{
			checkBoxes.prop('checked', true);
			icon.removeClass('glyphicon-ok-circle');
			icon.addClass('glyphicon-remove-circle');
		}
		
		$(this).toggleClass('active');
	});
	
	$('.modal').on('show.bs.modal', function (e) {
		var medias = $('.container input:checked');
		var html = '';
		
		html += '<div class="row">';
		medias.each(function(i, el){
			html += '<div class="col-xs-6 col-md-3">';
			html += '		<img src="asset/img/'+el.value+'" class="img-thumbnail" width="185" height="185"/>';
			html += '</div>';
			console.log(el.value);
		});
		html += '</div>';
		$('.modal .modal-body').html(html);
	});
	
	$('.modal').on('hidden.bs.modal', function (e) {
		$('.modal .modal-body').empty();
	});
	
});