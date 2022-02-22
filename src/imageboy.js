module.exports = {
    run: function(settings) {
        var interval = settings.fps * 0.277777778;
        var path = settings.path;
        var cb = settings.onFrame;
        var fs = require("fs");
        var Gameboy = require("serverboy");
        var {
            createCanvas,
            loadImage
        } = require('canvas');
        var canvas = createCanvas(160, 144)
        var ctx = canvas.getContext("2d");

        function screen() {
            return Buffer.from(canvas.toDataURL().split(",").pop(), "base64")
        };

        var gameboy = new Gameboy();
        var rom = fs.readFileSync(path);

        gameboy.loadRom(rom);

        setInterval(async function() {
            var ctx_data = ctx.createImageData(160, 144);

            var data = gameboy.doFrame();
            for (var i = 0; i < data.length; i++) {
                ctx_data.data[i] = data[i];
            }

            ctx.putImageData(ctx_data, 0, 0);
            cb(screen());
        }, interval);

        return {
            gameboy: gameboy,
            pressKeys: function(emu, array_keys) {
                emu.pressKeys(array_keys);
            }
        }
    },
    runB64: function(settings) {
        var interval = settings.fps * 0.277777778;
        var path = settings.path;
        var cb = settings.onFrame;
        var fs = require("fs");
        var Gameboy = require("serverboy");
        var {
            createCanvas,
            loadImage
        } = require('canvas');
        var canvas = createCanvas(160, 144)
        var ctx = canvas.getContext("2d");

        function screen() {
            return canvas.toDataURL().split(",").pop()
        };

        var gameboy = new Gameboy();
        var rom = fs.readFileSync(path);

        gameboy.loadRom(rom);

        setInterval(async function() {

            var ctx_data = ctx.createImageData(160, 144);

            var data = gameboy.doFrame();
            for (var i = 0; i < data.length; i++) {
                ctx_data.data[i] = data[i];
            }

            ctx.putImageData(ctx_data, 0, 0);
            cb(screen());
        }, interval)
        return {
            gameboy: gameboy,
            pressKeys: function(emu, array_keys) {
                emu.pressKeys(array_keys);
            }
        }
    },
    runDataURL: function(settings) {
        var interval = settings.fps * 0.277777778;
        var path = settings.path;
        var cb = settings.onFrame;
        var fs = require("fs");
        var Gameboy = require("serverboy");
        var {
            createCanvas,
            loadImage
        } = require('canvas');
        var canvas = createCanvas(160, 144)
        var ctx = canvas.getContext("2d");

        function screen() {
            return canvas.toDataURL();
        };

        var gameboy = new Gameboy();
        var rom = fs.readFileSync(path);

        gameboy.loadRom(rom);

        setInterval(async function() {

            var ctx_data = ctx.createImageData(160, 144);

            var data = gameboy.doFrame();
            for (var i = 0; i < data.length; i++) {
                ctx_data.data[i] = data[i];
            }

            ctx.putImageData(ctx_data, 0, 0);
            cb(screen());
        }, interval)
        return {
            gameboy: gameboy,
            pressKeys: function(emu, array_keys) {
                emu.pressKeys(array_keys);
            }
        }
    }
}
