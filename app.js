// 1 Create a <button> element on the DOM, you may do this in jQuery, or write it directly in the HTML code. Have the button text read "Generate".

// 2 Using jQuery, append a <div> element when you click the button.

// 3 Inside the <div> element you created in the previous step, create a <p> element that shows how many times you have clicked the button from the first step.

// 4 Inside the <div> element you created in step two, append two <button> elements. The text of the two buttons should read "Swap" and "Delete".

// 5 In a CSS file, any <div> created using the "Generate" button should have a Red background-color.

// 6 Clicking a "Swap" <button> should change its parent background-color from Red to Yellow.

// 7 Clicking the "Swap" <button> again should turn the color back to Red.

// 8 Clicking a "Delete" <button> should remove its parent <div> container (and all of its contents).

var generatedElementsArray = [];
var clickCounter = 0;

$(document).ready(function(){
  $('#generate').on('click', function(){ // when the #generate button is clicked...
    genDiv();
  });
  $(document.body).on('click', '.swapBtn', function(){
    $(this).parent().toggleClass('yellow');
    if($(this).parent().hasClass('yellow')){
      $(this).siblings().css({'color':'black'});
    } else {
      $(this).siblings('p').css({'color':'white'});
    }
  });
  $(document.body).on('click', '.deleteBtn', function(){
    $(this).parent().remove();
    generatedElementsArray.splice($(this).parent().attr('class'), 1);
  });
});

function genDiv(){
  clickCounter++;
  $div = $('<div>').addClass('generated '+clickCounter);
  $div.html($('<p>').text(clickCounter));
  $div.append($('<button>').addClass('swapBtn').text('Swap'));
  $div.append($('<button>').addClass('deleteBtn').text('delete'));
  generatedElementsArray.push($div);
  generatedElementsArray.forEach(div => {
    $(document.body).append(div);
  });
} // end genDiv
