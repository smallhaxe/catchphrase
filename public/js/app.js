// app.js

// on $(document).ready event, use jQuery to:
$(function(){

//
// INCLUDE FRONT-END JAVASCRIPT BELOW:
//
  $('#new-phrase').on('submit', function(e){
    var $this = $(this);
    var formData = $this.serialize();
    console.log(formData);
    $.post('/phrases', formData).
      done(function(data){
        console.log('Succes!');
      })
  });
  $.get('/phrases').
    done(function(data){
      console.log(data);
    });

});
