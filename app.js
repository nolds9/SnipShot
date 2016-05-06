var page = new WebPage(), address, output, size
address = "https://github.com/ga-wdi-lessons/activerecord-intro"
page.open(address, function (status) {
  // no error checking
  console.log(status);
  setTimeout(function () {
    var clipRects = page.evaluate(function () {
      return [].map.call(document.querySelectorAll("pre"), function (d) {
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
        page.render("images/readme-" + i + ".png")
      } catch (e) {
        console.log(e);
        console.log(e.stack);
      }
    }
    phantom.exit()
  }, 500)
})
