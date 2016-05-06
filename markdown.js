#!/usr/bin/env node
var fs = require('fs')

fs.readFile('readme.md', 'utf8', function(err, res){
  var lines = res.split('\n')
  var incode = false
  var numCodeBlock = 0
  lines.forEach(function(line, i){
    var re = new RegExp(/^\ {4}|```/)
    if(!incode && line.match(re)){
      incode = true
      numCodeBlock++
    } else if(incode && line.match(re)) {
      incode = false
      console.log("![](./output-" + numCodeBlock + ".png)")
    }
    if(incode){
      // console.log(numCodeBlock, i, line)
    } else if(!line.match(re)){
      console.log(line)
    }
  })
})
