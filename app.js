var clickCounter = 0;

$(document).ready(function(){
  $('#generate').on('click', function(){
    genDiv();

  });
});

function genDiv(){
  clickCounter++;
  $(document.body).append($('<div>').addClass('madeByGenerateBtn'+ ' ' +clickCounter));
  $('.1').html($('<p>').text(clickCounter));
}
