window.addEventListener("load", function () {

    var engine = Quintus().include("Sprites, Scenes, Input, 2D").setup({
        width: 1000,
        height: 500
    }).controls();

    engine.scene("STEM", function (stage) {
        
        var sprite = new engine.Sprite({
            x: 100, y: 100, asset: '../images/smiley.jpg',
            angle: 0, collisionMask: 1, scale: 1
        });

        stage.insert(sprite);

        engine.input.on('left', stage, function (e) {
            if (sprite.p.x > 0) {
                sprite.p.x = sprite.p.x - 5;
            }
        });

        engine.input.on('right', stage, function (e) {
            if(sprite.p.x < engine.width) {
                sprite.p.x = sprite.p.x + 5;
            }
        });

    });

    engine.load('../images/smiley.jpg', function () {
        engine.stageScene("STEM");
    });

});