// Scroll to anchor.
var
  opticalOffset = vHeight * .1;

$("a[href^='#']").click(function(event) {
  event.preventDefault();

  var
    scrollto = $(this).data("scrollto"),
    $target = $($(this).attr("href")),
    destination;

  if ($target.selector === "#") {
    destination = 0;
  } else {
    window.location.hash = "section-" + this.hash.slice(1)

    if (scrollto !== "") {
      // Plus one to trigger waypoint.
      destination = ($target.offset().top - vHeight * scrollto) + 1;
    } else {
      destination = $target.offset().top - opticalOffset
    }
  }

  $("html, body").animate({
    scrollTop: destination
  }, durBasic);
});

// On load.
if (location.hash) {
  var
    smoothScrollTo = "#" + location.hash.slice(9),
    destination;

  $(window).load(function() {
    if (smoothScrollTo == "#profile") {
      // Magic decimal number to align with heading.
      destination = ($(smoothScrollTo).offset().top - vHeight * .425) + 1
    } else {
      destination = $(smoothScrollTo).offset().top - opticalOffset;
    }

    $("html, body").animate({
      scrollTop: destination
    }, durBasic);
  })
}
