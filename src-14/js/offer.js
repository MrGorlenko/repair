$(document).ready(function(){
$('#offer-form').on('submit',  function(e){
    e.preventDefault();
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            $('.success').html(data + ',Ваша форма отправлена!')
        },
        error: function(jqXHR, textStatus){
            console.log(jqXHR + ': ' + textStatus);
        }
    });
  });
}); 