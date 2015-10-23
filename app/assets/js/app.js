var
  vHeight = window.innerHeight,
  $body = $("body"),
  $stamp = $("#js-stamp");

$(window).on("resize orientationchange", function() {
  clearTimeout(this.id)
  
  this.id = setTimeout(function() {
    vHeight = window.innerHeight;
  }, durBasic)
});
