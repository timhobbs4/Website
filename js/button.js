$('#uxCollapse').on('show.bs.collapse', function(e){
	$('.btn-primary').removeClass('active');
	$('#uxButton').css({'boxShadow':'0px 0px 0px 0px #BED360','color':'black'});
	$('#uxServicesCard').css('borderColor','#BED360')
	$('#uxButton').css('backgroundColor','#BED360')
	$('#consultServicesCard').css('borderColor','#979797')
	$('#consultingButton').css({'color':'white','backgroundColor':'#D8D8D8'});
	$('.consultCollapse').collapse('hide')
	$('.cldCollapse').collapse('hide')
	$('#cloudButton').css({'backgroundColor':'#D8D8D8','color':'white'});
	$('#cloudServicesCard').css('borderColor','#979797')
});

$('#consultingCollapse').on('show.bs.collapse', function(e){
	$('.btn-primary').removeClass('active');
	$('#consultingButton').css({'boxShadow':'0px 0px 0px 0px #BED360', 'borderColor': 'transparent','color':'black', 'backgroundColor':'#BED360'});
	$('#consultServicesCard').css('borderColor','#BED360')
	$('#uxServicesCard').css('borderColor','#979797')
	$('#uxButton').css({'backgroundColor':'#D8D8D8', 'borderColor':'#D8D8D8', 'color':'white'});
	$('#cloudServicesCard').css('borderColor','#979797')
	$('#cloudButton').css({'backgroundColor':'#D8D8D8', 'color':'white'})
	$('.uxCollpse').collapse('hide')
	$('.cldCollapse').collapse('hide')
	
});

$('#cloudCollapse').on('show.bs.collapse', function(e){
	$('.btn-primary').removeClass('active');
	$('#cloudButton').css({'boxShadow':'0px 0px 0px 0px #BED360','borderColor':'transparent','backgroundColor':'#BED360','color':'black'});
	$('#uxServicesCard').css('borderColor','#979797')
	$('#uxButton').css({'backgroundColor':'#D8D8D8','borderColor':'#D8D8D8','color':'white'});
	$('#consultServicesCard').css('borderColor','#979797')
	$('#consultingButton').css({'color':'white', 'backgroundColor':'#D8D8D8'});
	$('#cloudServicesCard').css('borderColor','#BED360')
	$('.consultCollapse').collapse('hide')
	$('.uxCollpse').collapse('hide')
});

$('#uxCollapse').on('hidden.bs.collapse', function(e) {
    if ($('#consultingCollapse').is(':hidden') && $('#cloudCollapse').is(':hidden')) {
        $('.btn-primary').removeClass('active');
        $('.btn-primary').removeClass('focus');
        $('#uxButton').css({'backgroundColor':'#D8D8D8','borderColor':'#D8D8D8','color':'white'});
        $('#uxServicesCard').css('borderColor', '#979797')
    }

})

$('#consultingCollapse').on('hidden.bs.collapse', function(e) {
    if ($('#uxCollapse').is(':hidden') && $('#cloudCollapse').is(':hidden')) {
        $('.btn-primary').removeClass('active');
        $('.btn-primary').removeClass('focus');
        $('#consultingButton').css({'backgroundColor':'#D8D8D8','borderColor':'#D8D8D8','color':'white'});
        $('#consultServicesCard').css('borderColor', '#979797')
    }

})

$('#cloudCollapse').on('hidden.bs.collapse', function(e) {
    if ($('#uxCollapse').is(':hidden') && $('#consultingCollapse').is(':hidden')) {
        $('.btn-primary').removeClass('active');
        $('.btn-primary').removeClass('focus');
        $('#cloudButton').css({'backgroundColor':'#D8D8D8','borderColor':'#D8D8D8','color':'white'});
        $('#cloudServicesCard').css('borderColor', '#979797')
    }

})