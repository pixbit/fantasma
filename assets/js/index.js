$(document).ready(function () {

    $('.filename').each(function(){
      var p_tag = $(this).parent();
      var filename = $(this);

      filename.insertAfter(p_tag);
      p_tag.remove();
    });

    $('#menuzord').menuzord();
});
