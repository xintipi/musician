$(document).ready(function () {

  function resizeContentConcert() {
    if ($(window).width() >= 1265) {
      $(".content-concert").css({
        "position": "absolute",
        "padding-top": "0",
        "margin-left": "0",
        "top": $(window).width() / 5.58,
        "left": $(window).width() / 5.23
      })
    } else if ($(window).width() >= 675 && $(window).width() < 1265) {
      $(".content-concert").css({
        "position": "unset",
        "padding-top": "20px",
        "margin-left": "0"
      })
    } else if ($(window).width() >= 568 && $(window).width() < 675) {
      $(".content-concert").css({
        "position": "unset",
        "left": "0",
        "top": "350px",
        "padding-top": "20px"
      })
    } else if ($(window).width() >= 320 && $(window).width() < 568) {
      $(".content-concert").css({
        "position": "unset",
        "left": "0",
        "top": "230px",
        "padding-top": "20px"
      })
    }
  }

  resizeContentConcert()
  $(window).resize(resizeContentConcert)


  function resizeContentUpcoming() {
    $(".upcoming-content").css({
      "top": $(window).width() / (1920 / 195),
      "left": $(window).width() / (1920 / 664)
    })
  }
  resizeContentUpcoming()
  $(window).resize(resizeContentUpcoming)

})