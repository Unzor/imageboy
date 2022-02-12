var directory = "frames";
var imageboy = require("imageboy");
var fs = require("fs");
var i = 0;

if (!fs.existsSync(directory)) {
fs.mkdirSync(directory);
}

imageboy.run({
  path: "pokemon_blue.gb",
  interval: 500, // 2 FPS so the storage and memory don't go crazy
  onFrame: function(frame) {
   i = i + 1;
   fs.writeFileSync("frame_" + i + ".png", frame);
  }
})
