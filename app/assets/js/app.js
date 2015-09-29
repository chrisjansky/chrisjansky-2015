var
  $body = $("body"),
  $header = $("[data-header]"),
  $stamp = $("#js-stamp");

var
  // projectsInview = $("[data-projects]").waypoint({
  //   handler: function(direction) {
  //     $body.toggleClass("scrolled--up", direction === "up");
  //     $body.toggleClass("scrolled--down", direction === "down");
  //   },
  //   offset: "50%"
  // }),
  sectionInview = $("[data-section]").waypoint({
    handler: function(direction) {
      var
        $target = direction === "down" ? $(this.element) : $(this.element).prevAll("[data-section]:first");
        // $prev = $(this.element).prev().length > 0 ? $(this.element).prev() : $("[data-projects]");

      // No previous object
      // if ($target.length < 1) {
      //   $target = $("[data-projects]");
      // }

      $stamp.text($target.data("stamp"));

      $body.toggleClass("section--" + $(this.element).prevAll("[data-section]:first").data("slug"), direction === "up");
      $body.toggleClass("section--" + $(this.element).data("slug"), direction === "down");

    },
    // Top of object gets into center of viewport.
    offset: "50%"
  });
