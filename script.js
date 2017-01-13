
var main = function() {
  	$('.bar').hide();
    $('#about-page').hide();
  	$('#resume-page').hide();

  $('#front').click(function(){
  	$('#about').removeClass('pagesNot').addClass('pagesOpaque');
  	$('#resume').removeClass('pagesNot').addClass('pagesOpaque');
  	$('#about-page').hide();
  	$('#resume-page').hide();
  	$('#front-page').show();
  	$(this).removeClass('pagesOpaque').addClass('pagesNot');
  });
  $('#about').click(function(){
  	$('#front').removeClass('pagesNot').addClass('pagesOpaque');
  	$('#resume').removeClass('pagesNot').addClass('pagesOpaque');
  	$('#front-page').hide();
  	$('#resume-page').hide();
  	$('#about-page').show();
  	$(this).removeClass('pagesOpaque').addClass('pagesNot');
  });
  $('#resume').click(function(){
  	$('#about-page').hide();
  	$('#front-page').hide();
  	$('#resume-page').show();
  	$('#about').removeClass('pagesNot').addClass('pagesOpaque');
  	$('#front').removeClass('pagesNot').addClass('pagesOpaque');
  	$(this).removeClass('pagesOpaque').addClass('pagesNot');
  });


};

$( document ).ready(main);

