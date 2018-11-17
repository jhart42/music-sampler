$(document).ready(function() {

  function hideAll() {
    $('#money_text').hide();
    $('#kids_text').hide();
    $('#happy_text').hide();
    $('#blues_text').hide();
  }

  hideAll();

  function pauseAll() {
    $("audio").each(function() {
        this.pause();
        this.currentTime = 0;
    });
  }


  $('img').click(function() {

    hideAll();

    switch ($(this).attr("id")) {
      case "money_img":
        $('#money_text').show();
        pauseAll();
        break;
      case "kids_img":
        $('#kids_text').show();
        pauseAll();
        break;
      case "happy_img":
        $('#happy_text').show();
        pauseAll();
        break;
      case "blues_img":
        $('#blues_text').show();
        pauseAll();
        break;
      default:
        //statement
        break;

    }
  }); // end of function for clicking


});
