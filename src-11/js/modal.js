$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var modal_1 = $('#modal_1');
  var close = $('#close');
  var close_1 = $('#close_1');
  var offerButton = $('#offer__button');
  console.log(button);
  console.log(offerButton);

  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function(){
   modal.removeClass('modal_active');
  });
  
  offerButton.on('click', function() {
    modal_1.addClass('modal-1_active');
  });

  close_1.on('click', function(){
    modal_1.removeClass('modal-1_active');
   });

});