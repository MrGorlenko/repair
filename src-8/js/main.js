var button = document.querySelector('#button');
var modal = document.querySelector('#modal'); 
var close = document.querySelector('#close')

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active'); 
});

function closePanel(){
  modal.classList.remove('modal_active');
}

setTimeout (closePanel, 5000);