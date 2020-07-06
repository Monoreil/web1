function movingBar() {

    var x;
    var MIN = 100;
    var isBarMoving = false;
    var vContainer = document.getElementById('#container nav div.verticleBar');
    var Bar = document.getElementById('verticleBar');

    Bar.addEventListener('mousedown',function (e) {
        isBarMoving = true;
        x = e.pageX;
        console.log("test");
    });

    document.addEventListener.mouseup(function (e) {
        if (isBarMoving) {
            isBarMoving = false;
            movingvBar(vContainer, x, e.pageX);
        }
        x = 0;
    });
    document.addEventListener.mousemove(function (e) {
        movingvBar(vContainer, x, e.pageX);
        x = e.pageX;
    })
    function movingvBar(obj, bx, cx) {
        var gx = obj.style.gridTemplateColumns.split(" ")[0].replace(/[^0-9]/g, "");
        obj.style.gridTemplateColumns(pxControll(gx, bx, cx) + "px auto");
    }
    function pxControll(g, b, c) {
        var d = c - b;
        var r = parseInt(g, 10) + d;
        if (r < MIN) {
            r = MIN;
        }
        return r;
    }
}