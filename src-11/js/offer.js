$(document).ready(function(){
$('#offer-form').on('submit',  function(e){
    var form = this; 
    e.preventDefault();
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            $('.success').html(data + ', форма отправлена!');
            // $('.success').trigger("reset");
            form.reset();
        },
        error: function(jqXHR, textStatus){
            console.log(jqXHR + ': ' + textStatus);
        },    
    });
  });
});  