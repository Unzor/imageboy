# imageboy
GameBoy emulator library for Node.js with the main point being for creating images, made with the node-canvas and serverboy projects.

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
  interval: 16.6666667 // 60 FPS
  onFrame: function(frame) {
  fs.writeFileSync("frame.png", frame);
  }
})
  ```
  
`imageboy.runB64()`: Runs an emulator and returns a Base64 string of image. 

### `run()` arguments
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
  interval: 16.6666667 // 60 FPS
  onFrame: function(frame) {
 console.log("Base64 of frame: " + frame);
  }
})
```

`imageboy.runDataURL()`: Runs an emulator and returns a data URL of the image. 

### `run()` arguments
1: (array), inside the array:
- `interval` (optional): The interval to generate a frame at. Default is 16.6666667 (60 FPS).
- `path` (required): The path of the game ROM.
- `onFrame` (required): A callback on when a frame is generated, calls back a data URL of the image.

Returns with:
- `gameboy` (object): The Gameboy instance. Useful for controlling the emulator or sending a key.
- `sendKeys` (function): Sends one or multiple keys.

#### `sendKeys()` arguments
1: (array) Array of keycodes to press.

### `imageboy.runB64()` example
```javascript
imageboy.runDataURL({
  path: "pokemon_blue.gb",
  interval: 16.6666667 // 60 FPS
  onFrame: function(frame) {
  console.log("DataURL: " + frame);
  }
})
```
