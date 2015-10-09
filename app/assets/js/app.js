var
  vHeight = window.innerHeight,
  $body = $("body"),
  $stamp = $("#js-stamp");

var
  sectionInview = $("[data-section]").waypoint({
    handler: function(direction) {
      var
        slug = $(this.element).data("slug"),
        $target = direction === "down" ? $(this.element) : $(this.element).prevAll("[data-section]:first");

      $stamp.text($target.data("stamp"));

      $body.toggleClass("section--" + $(this.element).prevAll("[data-section]:first").data("slug"), direction === "up");
      $body.toggleClass("section--" + slug, direction === "down");

      if (slug === "colours") {
        $body.toggleClass("body--scrolled", direction === "down");
      }

    },
    // Top of object gets into center of viewport.
    offset: "50%"
  }),
  introInview = $("[data-intro]").waypoint({
    handler: function(direction) {
      $body.toggleClass("body--scrolled", direction === "down");
    }
  });

$(window).on("resize orientationchange", function() {
  clearTimeout(this.id)
  
  this.id = setTimeout(function() {
    vHeight = window.innerHeight;
  }, durBasic)
});
