
var main = function() {
  $('.links').click(function() {
    $(this).toggleClass('.gmailClkd');
  });
};

$( document ).ready(main);