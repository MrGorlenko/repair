$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  console.log(button);

  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function(){
   modal.removeClass('modal_active');
  });
});

 $(document).ready(function(){
  var up = $('#button__up');
  up.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0},
      '300');
  });
 }); 