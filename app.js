var system = require('system');
var args = system.args;
var page = new WebPage(), address
address = "" + args[1] // set url to crawl
page.open(address, function (status) {
  // no error checking...yet
  console.log(status);
  setTimeout(function () {
    var clipRects = page.evaluate(function () {
      return [].map.call(document.querySelectorAll("pre"), function (d) { // grab all pre elements
        return d.getBoundingClientRect()
      })
    });

    for (var i = 0; i < clipRects.length; i++) {
      console.log(clipRects[i], i);
      try {
        var clip = clipRects[i]
        page.clipRect = {
          top: clip.top,
          left: clip.left,
          width: clip.width,
          height: clip.height
        }
        page.render("images/readme-" + i + ".png") // file to output
      } catch (e) {
        console.log(e.stack);
      }
    }
    phantom.exit()
  }, 500)
})
