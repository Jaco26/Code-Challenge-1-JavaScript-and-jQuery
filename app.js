$(document).ready(function(){
  $('#generate').on('click', genDiv);
});

function genDiv(){
  $(document.body).append($('<div>'));//.attr('id', 'div1'));
  
}
