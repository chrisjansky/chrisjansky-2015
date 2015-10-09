var
  jsNav = document.getElementById("js-nav");

var headroom = new Headroom(jsNav, {
  "offset": Math.round(vHeight * .25),
  "tolerance": {
    down: Math.round(vHeight * .05),
    up: Math.round(vHeight * .05)
  }
}).init();
