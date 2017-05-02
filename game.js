window.addEventListener("load", function () {

    var engine = Quintus().include("Sprites, Scenes, Input, 2D").setup({
        width: 1000,
        height: 500
    }).controls();

    engine.scene("start", function (stage) {
        var sprite1 = new engine.Sprite({
            x: 100, y: 100, asset: 'person.jpg',
            angle: 0, collisionMask: 1, scale: 1
        });

        stage.insert(sprite1);

        engine.input.on('left', stage, function (e) {
            if (sprite1.p.x > 0 + (sprite1.p.w / 2)) {
                sprite1.p.x = sprite1.p.x - 3;
            }
        });

        engine.input.on('right', stage, function (e) {
            sprite1.p.x = sprite1.p.x + 3;
        });
    });

    engine.load('person.jpg', function () {
        engine.debug = true;
        engine.stageScene("start");
    });

});