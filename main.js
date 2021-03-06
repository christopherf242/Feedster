$(document).ready(() => {
  //Notes: The .on() method binds(connects) the event listener(the first parameter, which basically registers that event)
  // and the second parameter(the call back function that's triggered when the event occurs on the html element that we're selecting/targeting).
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  })
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  $('.btn').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', () => {
    $(event.currentTarget).removeClass('btn-hover')
  })

  $('.postText').on('keyup', (event) => {
    //Notes: The .focus() jQuery method tells the <text area> to expect typed text as soon as the page loads.
    $('.postText').focus();
    //Notes: Next we set post equal to the value of string inside of the .postText element.
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    $('.characters').html(remaining);

    if(remaining <= 0){
      $('.wordcount').addClass('red');
    }else{
      $('.wordcount').removeClass('red');
    }
  })


});
