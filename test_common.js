$(document).ready(function () {

  // Cache $(document)
  var $document = $(document);

  // Open/close menu in mobile by clicking on mail-logo
  $document.on('click', '.logo', function () {
    $(this).closest('.body-header').toggleClass('body-header_is-open');
  });

  // Close menu when clicking outside
  $document.click( function(e) {
      if(!$(e.target).closest('.body-header').length && $('.body-header_is-open').length) {
          $('.body-header').removeClass('body-header_is-open');
      }
  });

});
