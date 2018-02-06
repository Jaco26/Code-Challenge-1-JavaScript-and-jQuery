// 1 Create a <button> element on the DOM, you may do this in jQuery, or write it directly in the HTML code. Have the button text read "Generate".

// 2 Using jQuery, append a <div> element when you click the button.

// 3 Inside the <div> element you created in the previous step, create a <p> element that shows how many times you have clicked the button from the first step.

// 4 Inside the <div> element you created in step two, append two <button> elements. The text of the two buttons should read "Swap" and "Delete".

// 5 In a CSS file, any <div> created using the "Generate" button should have a Red background-color.

// 6 Clicking a "Swap" <button> should change its parent background-color from Red to Yellow.

// 7 Clicking the "Swap" <button> again should turn the color back to Red.

// 8 Clicking a "Delete" <button> should remove its parent <div> container (and all of its contents).

$(document).ready(readyNow);

function readyNow(){
  let clickCounter = 0;
  $('#generate').on('click', function () {
    clickCounter++;
    $div = $('<div>').addClass('red').append($('<p>').text(clickCounter));
    $div.append($('<button>').text('Swap').addClass('swap'), $('<button>').text('Delete').addClass('delete'));
    $('body').append($div);
  });

  $('body').on('click', '.swap', function(){
   if($(this).parent().hasClass('yellow')){
     $(this).parent().removeClass('yellow').addClass('red');
   } else if ($(this).parent().hasClass('red')){
     $(this).parent().removeClass('red').addClass('yellow');
     console.log('hey');
   }
  });

  $('body').on('click', '.delete', function(){
    $(this).parent().remove();
  });
}

