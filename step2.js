window.addEventListener("load", function () {

    var engine = Quintus().include("Sprites, Scenes, Input, 2D").setup({
        width: 1000,
        height: 500
    }).controls();

    engine.scene("STEM", function (stage) {
    });

    engine.load('../images/smiley.jpg', function () {
        engine.stageScene("STEM");
    });

});