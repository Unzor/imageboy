# imageboy
GameBoy emulator library for Node.js with the main point being for creating images, made with the node-canvas and serverboy projects.

# Installation
```
npm install imageboy
```

# Simple usage
```javascript
var imageboy = require("imageboy");
var fs = require("fs");

imageboy.run({
  path: "pokemon_blue.gb",
  interval: 16.6666667, // 60 FPS
  onFrame: function(frame) {
  fs.writeFileSync("frame.png", frame);
  }
})
```

# Examples of actual usage
See [examples](/examples) directory.

# Documentation
`imageboy.run()`: Runs an emulator. 

### `run()` arguments
1: (array), inside the array:
- `interval` (optional): The interval to generate a frame at. Default is 16.6666667 (60 FPS).
- `path` (required): The path of the game ROM.
- `onFrame` (required): A callback on when a frame is generated, calls back a buffer of the image.

Returns with:
- `gameboy` (object): The Gameboy instance. Useful for controlling the emulator or sending a key.
- `sendKeys` (function): Sends one or multiple keys.

#### `sendKeys()` arguments
1: (array) Array of keycodes to press.

### `imageboy.run()` example
```javascript
imageboy.run({
  path: "pokemon_blue.gb",
  interval: 16.6666667, // 60 FPS
  onFrame: function(frame) {
  fs.writeFileSync("frame.png", frame);
  }
})
  ```
  
---
  
`imageboy.runB64()`: Runs an emulator and returns a Base64 string of image. 

### `runB64()` arguments
1: (array), inside the array:
- `interval` (optional): The interval to generate a frame at. Default is 16.6666667 (60 FPS).
- `path` (required): The path of the game ROM.
- `onFrame` (required): A callback on when a frame is generated, calls back a Base64 string of the image.

Returns with:
- `gameboy` (object): The Gameboy instance. Useful for controlling the emulator or sending a key.
- `sendKeys` (function): Sends one or multiple keys.

#### `sendKeys()` arguments
1: (array) Array of keycodes to press.

### `imageboy.runB64()` example
```javascript
imageboy.runB64({
  path: "pokemon_blue.gb",
  interval: 16.6666667, // 60 FPS
  onFrame: function(frame) {
 console.log("Base64 of frame: " + frame);
  }
})
```
---

`imageboy.runDataURL()`: Runs an emulator and returns a data URL of the image. 

### `runDataURL()` arguments
1: (array), inside the array:
- `interval` (optional): The interval to generate a frame at. Default is 16.6666667 (60 FPS).
- `path` (required): The path of the game ROM.
- `onFrame` (required): A callback on when a frame is generated, calls back a data URL of the image.

Returns with:
- `gameboy` (object): The Gameboy instance. Useful for controlling the emulator or sending a key.
- `sendKeys` (function): Sends one or multiple keys.

#### `sendKeys()` arguments
1: (array) Array of keycodes to press.

### `imageboy.runDataURL()` example
```javascript
imageboy.runDataURL({
  path: "pokemon_blue.gb",
  interval: 16.6666667, // 60 FPS
  onFrame: function(frame) {
  console.log("DataURL: " + frame);
  }
})
```

# Cairo-related errors
If you get an error about "libuuid.so.0" or another shared library file, then you should install Cairo, or on Replit, you should use the "NodeJS with Canvas" template. I am not the author of node-canvas (which uses Cairo), and if you find a related error, create an issue [here](https://github.com/Automattic/node-canvas/issues), not on this repo.
