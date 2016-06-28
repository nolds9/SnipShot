#!/usr/bin/env node
var fs = require('fs')
if (process.argv.length > 2) var file = process.argv[2]
// pass file to parse
fs.readFile(file || "readme.md", 'utf8', function(err, res){
  var lines = res.split('\n')
  var newFile = ""
  var incode = false
  var numCodeBlock = 0
  lines.forEach(function(line, i){
    var re = new RegExp(/^\ {4}|```/)
    if(!incode && line.match(re)){
      incode = true
    } else if(incode && line.match(re)) {
      incode = false
      newFile += "![](./images/readme-" + numCodeBlock + ".png)\n"
      numCodeBlock++
    }
    if(incode){
      // console.log(numCodeBlock, i, line)
    } else if(!line.match(re)){
      newFile += line + "\n"
    }
  })
  console.log(newFile);
})
