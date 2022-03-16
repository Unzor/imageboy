var isRunning = false;
var fs = require("fs");
var index = 0;
var imageboy = require("./imageboy");
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('run', () => {
        if (!isRunning) {

            isRunning = true;
            global.emulator = imageboy.runDataURL({
                path: "pokblu.gb",
                fps: 60,
                onFrame: function(frame) {
                    global.frame = frame;
                    io.emit("frame", frame);

                    socket.on('keydown', function(data) {
                        var index = keysToPress.indexOf(data.key);
                        if (index === -1) {
                            keysToPress.push(data.key);
                        }
                        emulator.pressKeys(emulator.gameboy, keysToPress);
                        keysToPress = [];
                    });

                }
            })

        } else {
            io.emit("frame", global.frame);

            socket.on('keydown', function(data) {
                var index = keysToPress.indexOf(data.key);
                if (index === -1) {
                    keysToPress.push(data.key);
                }
                emulator.pressKeys(emulator.gameboy, keysToPress);
                keysToPress = [];
            });
        }
    });
})


var keysToPress = [];

server.listen(3000, () => {
    console.log('listening on *:3000');
});
